<?php

namespace backend\controllers;

use Yii;
use common\models\Rigs;
use common\models\Poll;
use common\models\search\RigsSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;

/**
 * RigsController implements the CRUD actions for Rigs model.
 */
class RigsController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'actions' => ['login', 'error', 'script', 'temp'],
                        'allow' => true,
                    ],
                    [
                        // 'actions' => ['index', 'raw', 'mutual', 'info', 'state', 'reboot', 'eres', 'config', 'mass-config'],
                        'actions' => ['index', 'raw', 'mutual', 'info', 'state', 'reboot', 'eres', 'config', 'render-first', 'day-rate'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                    'mutual' => ['POST'],
                    'info' => ['POST'],
                    'post' => ['POST'],
                    'state' => ['POST'],
                    'reboot' => ['POST'],
                    'eres' => ['POST'],
                    'config' => ['POST'],
                    'render-first' => ['POST'],
                    'day-rate' => ['POST'],
                ],
            ],
        ];
    }

    // public function beforeAction($action) {
    //     $this->enableCsrfValidation = false;
    //     return parent::beforeAction($action);
    // }

    public function actionMutual()
    {
        if ($post = Yii::$app->request->post()) {
            if ($post['type'] == 'json') {
                // $data = Rigs::mutualData();
                $data = [];
                return json_encode($data);
            }
        }
    }

    /**
     * Lists all Rigs models.
     * @return mixed
     */
    public function actionIndex(int $id = 1, int $sort = 0)
    {

        // foreach (Rigs::find()->all() as $model) {
        //     if (isset($model->shelf)) {
        //         $shelf = preg_replace('/[^0-9]/', '', $model->hostname);
        //         if (count((string)$shelf) > 0 && (int)$shelf > 100 && (int)$shelf < 400) {
        //             $model->shelf = $shelf;
        //         } else {
        //             $model->shelf = '---';
        //         }
        //         $model->save();
        //     }
        // }

        $searchModel = new RigsSearch();

        // $cache = Yii::$app->cache->get('rigsLastData');

        // if ($cache) {
        //     $dataProvider = $cache;
        // } else {
            $dataProvider = $searchModel->search(Yii::$app->request->queryParams);
            // Yii::$app->cache->set('rigsLastData', $dataProvider, 600);
        // }




        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            // 'modelFirst' => $this->findModel($id),
            'modelID' => $id,
            'pollLast' => Poll::getLast(),
        ]);

    }

    /**
     * Displays a single Rigs model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionRenderFirst()
    {
        if (($post = Yii::$app->request->post()) && isset($post['rig_id'])) {
            // return $this->renderAjax('_rig', [
            //     'modelFirst' => $this->findModel($post['rig_id'])
            // ]);

            $model = $this->findModel($post['rig_id']);

            return $this->renderAjax('_rig', ['modelFirst' => $model], false);
        }
        
    }


    /**
     * Displays a single Rigs model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDayRate()
    {
        if (($post = Yii::$app->request->post()) && isset($post['rig_id'])) {
            $model = $this->findModel($post['rig_id']);
            return json_encode($model->dayRate, true);
        }
        
    }


    /**
     * Displays a single Rigs model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Rigs model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Rigs();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Rigs model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Rigs model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete(int $id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }


    public function actionState()
    {
        if (($post = Yii::$app->request->post()) && isset($post['id']) && isset($post['state'])) {

            $model = $this->findModel($post['id']);
            $model->status = $post['state'];

            if ($model->save()) {
                return json_encode($post['state']);
            }
        }
    }



    public function actionTemp()
    {
        $path = Yii::getAlias('@webroot') . '/misc/aesc.mp4';

        if (file_exists($path)) {
            return Yii::$app->response->sendFile($path);
        }      
    }




    public function actionScript()
    {
        $path = Yii::getAlias('@webroot') . '/misc/eres.bat';

        if (file_exists($path)) {
            return Yii::$app->response->sendFile($path);
        }      
    }





    public function actionConfig()
    {
        session_write_close();
        
        if (($post = Yii::$app->request->post()) && isset($post['id'])  && isset($post['new'])) {

            $model = $this->findModel($post['id']);

            if ($post['new'] == 1) {

                $read = shell_exec('cd /opt && ./winexe //' . $model['ip'] . ' -U administrator%1000000$ "cmd.exe /c cd c:/gpumine/claymore && more start_bil*"');

                $data = array(
                    'response' => $read,
                );

                if (empty($read)) {
                    $data['error'] = 1;
                    
                } else {
                    $data['error'] = 0;

                    $model->data = $read;
                    $model->save();
                }

            } else {

                if ($model->data) {

                    $data = array(
                        'error' => 0,
                        'response' => $model->data,
                    );

                } else {

                    $data = array(
                        'error' => 0,
                        'response' => 'No saved config for this machine yet - you do need to read it remotely.',
                    );

                }

            }

            return json_encode($data);
        }
    }





    public function actionEres()
    {
        session_write_close();
        
        if (($post = Yii::$app->request->post()) && isset($post['id'])) {

            $model = $this->findModel($post['id']);

            // $data = shell_exec('net rpc shutdown -r --ipaddress ' . $model['ip'] . ' --user master%1000000$ 2>&1');

            $download = shell_exec('cd /opt && ./winexe //' . $model['ip'] . ' -U administrator%1000000$ "cmd.exe /c cd windowspow* && powershell.exe iwr -outf c:/eres.bat http://mine.tass.ml/backend/web/index.php?r=rigs/script"');

            $exec = shell_exec('cd /opt && ./winexe //' . $model['ip'] . ' -U administrator%1000000$ "cmd.exe /c cd c:/ && eres.bat ' . $model['shelf'] . '"');
            // $exec = shell_exec('cd /opt && ./winexe //' . $model['ip'] . ' -U administrator%1000000$ "cmd.exe /c cd c:/ && eres.bat"');

            $data = array(
                'response' => $exec,
            );

            if (empty($exec)) {
                $data['error'] = 1;
                
            } else {
                $data['error'] = 0;

                if (strpos($exec, 'nothing') !== false) {
                    $data['state'] = 0;
                } else {
                    $data['state'] = 1;
                }
            }

            return json_encode($data);
        }
    }


    public function actionMassConfig()
    {
        session_write_close();

        Rigs::massConfig();
    }


    public function actionReboot()
    {
        session_write_close();

        if (($post = Yii::$app->request->post()) && isset($post['id']) && isset($post['state'])) {

            // if (isset($post['dead']) && $post['dead'] > 10) {
            //     return json_encode($data = array(
            //         'error' => 'dead',
            //         'response' => $exec,
            //         'state' => $post['state'],
            //         'abort' => $post['abort'],
            //     ));
            // }

            $model = $this->findModel($post['id']);

            // $data = shell_exec('net rpc shutdown -r --ipaddress ' . $model['ip'] . ' --user master%1000000$ 2>&1');

            if (isset($post['abort']) && $post['abort'] == 1) {
                $exec = shell_exec('cd /opt/remote && ./abort-reboot-rig.sh ' . $model['ip'] . '  2>&1');
            } else {
                $exec = shell_exec('cd /opt/remote && ./reboot-rig.sh ' . $model['ip'] . '  2>&1');
            }

            $data = array(
                'response' => $exec,
                'state' => $post['state'],
                'abort' => $post['abort'],
            );

            if (strpos($exec, ' succe') !== false) {
                $data['error'] = 0;
            } else {
                $data['error'] = 1;
            }

            // if () {
                return json_encode($data);
            // }
        }
    }


    public function actionRaw(int $id)
    {
        session_write_close();
        $this->layout = false;
        $model = $this->findModel($id);
        // $data = file_get_contents('http://127.0.0.1:8109');
        // $data = shell_exec('curl --max-time 10 http://127.0.0.1:8109 2>&1');
        $data = shell_exec('curl --max-time 5 ' . $model['ip'] . ':3333 2>&1');
        // exec('cat /opt/raw-rig.sh ' . $id, $data);

        if (($post = Yii::$app->request->post()) && $post['type'] === 'json') {
            return json_encode($data);
        }

        return $this->render('raw', [
            'model' => $this->findModel($id),
            'raw' => $data,
        ]);
    }


    public function actionInfo(int $id = 1)
    {
        if (($post = Yii::$app->request->post()) && isset($post['id'])) {
            if (($model = Rigs::findOne($post['id'])) !== null) {
                $data = [
                    'id' => $model->id,
                    'ip' => $model->ip,
                    'dayRate' => $model->dayRate,
                    'hostname' => $model->hostname,
                    'enabled' => $model->status,
                ];

                if ($model->lastJournal) {
                    $data['state'] = $model->lastJournal->up;
                    $data['temps'] = $model->lastJournal->tempData;
                    $data['rate'] = $model->lastJournal->totalHashrate;
                    $data['count'] = count(explode(";", $model->lastJournal->rate_details));
                    $data['runtime'] = 'Runtime: ' . (int)($model->lastJournal->runtime / 60) . ' h ' . ($model->lastJournal->runtime % 60) . ' min';
                }
                return json_encode($data, true);
            }
        }

        throw new NotFoundHttpException('The requested model does not exist.');
    }





    /**
     * Finds the Rigs model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Rigs the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Rigs::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }



}
