// app/modules/user_settings/native/two_way_link/useAccountLinkStepTracking.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: _handleStateChange
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            michal = argBar;
            offset = null;
            if(!(offset != golfie)) { _fun00002_ip = 137; continue _fun00001 }
 15:
            entity = golfie.index;
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            tangon = 2;
            tangon = oscard[tangon];
            option = undefined;
            oscard = report.bind(option)(tangon);
            report = oscard.track;
            zuuluu = _closure1_slot3;
            tangon = zuuluu.ACCOUNT_LINK_STEP;
            zuuluu = {};
            verify = argCor;
            zuuluu['location_stack'] = verify;
            verify = michal.current;
            verify = offset != verify;
            if(!verify) { _fun00002_ip = 97; continue _fun00001 }
 82:
            offset = golfie.routeNames;
            verify = michal.current;
            option = offset[verify];
 97:
            zuuluu['previous_step'] = option;
            golfie = golfie.routeNames;
            golfie = golfie[entity];
            zuuluu['current_step'] = golfie;
            golfie = argBaz;
            zuuluu['platform_type'] = golfie;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            michal['current'] = entity;
 137:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/native/two_way_link/useAccountLinkStepTracking.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useAccountLinkStepTracking
        oscard = argFoo;
        golfie = argBar;
        var _closure2_slot0 = oscard;
        var _closure2_slot1 = golfie;
        report = _closure1_slot2;
        zuuluu = report.useRef;
        entity = null;
        entity = zuuluu.bind(report)(entity);
        var _closure2_slot2 = entity;
        tangon = report.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        entity = function(argFoo) {
            oscard = _closure1_slot4;
            verify = _closure2_slot2;
            option = _closure2_slot0;
            golfie = _closure2_slot1;
            entity = undefined;
            offset = argFoo;
            yankee = undefined;
            michal = yankee[oscard](offset, verify, option, golfie, oscard);
            return entity;
        };
        entity = tangon.bind(report)(entity, zuuluu);
        tangon = report.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function() {
            oscard = _closure1_slot4;
            report = {};
            entity = 0;
            report['index'] = entity;
            entity = ['landing'];
            report['routeNames'] = entity;
            verify = _closure2_slot2;
            option = _closure2_slot0;
            golfie = _closure2_slot1;
            entity = undefined;
            yankee = undefined;
            offset = report;
            michal = yankee[oscard](offset, verify, option, golfie, oscard);
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useAccountLinkStepTracking'] = michal;
    return entity;
})();