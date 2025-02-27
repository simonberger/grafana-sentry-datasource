/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import { QueryCtrl } from 'app/plugins/sdk';
export declare class SentryQueryCtrl extends QueryCtrl {
    private templateSrv;
    static templateUrl: string;
    defaults: {};
    /** @ngInject **/
    constructor($scope: any, $injector: any, templateSrv: any);
    getProjects(): any;
    onChangeInternal(): void;
}
