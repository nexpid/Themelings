// app/modules/voice_panel/native/utils/PanelSizeUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.VOICE_PANEL_DRAWER_MAX_WIDTH;
    var _closure1_slot0 = tangon;
    tangon = {};
    report = 'function getMaxPanelWidth_PanelSizeUtilsTsx1({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeAreaLeft,safeAreaRight:safeAreaRight}){const{VOICE_PANEL_DRAWER_MAX_WIDTH}=this.__closure;return Math.min(windowWidth,connected?windowWidth:Math.min(VOICE_PANEL_DRAWER_MAX_WIDTH,windowWidth-safeAreaLeft-safeAreaRight));}';
    tangon['code'] = report;
    var _closure1_slot1 = tangon;
    tangon = function() {
        entity = function(argFoo) { // Original name: getMaxPanelWidth
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                tangon = entity.windowWidth;
                golfie = entity.connected;
                report = entity.safeAreaLeft;
                verify = entity.safeAreaRight;
                oscard = global;
                zuuluu = oscard.Math;
                michal = zuuluu.min;
                entity = tangon;
                if(golfie) { _fun00002_ip = 78; continue _fun00001 }
 46:
                option = oscard.Math;
                golfie = option.min;
                oscard = _closure1_slot0;
                report = tangon - report;
                report = report - verify;
                entity = golfie.bind(option)(oscard, report);
 78:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        zuuluu = {};
        tangon = _closure1_slot0;
        zuuluu['VOICE_PANEL_DRAWER_MAX_WIDTH'] = tangon;
        entity['__closure'] = zuuluu;
        zuuluu = 6813992446153.0;
        entity['__workletHash'] = zuuluu;
        michal = _closure1_slot1;
        entity['__initData'] = michal;
        return entity;
    };
    tangon = tangon.bind(entity)();
    report = {};
    option = 'function getPanelX_PanelSizeUtilsTsx2(windowWidth,width){return(windowWidth-width)/2;}';
    report['code'] = option;
    var _closure1_slot2 = report;
    michal = function() {
        entity = function(argFoo, argBar) { // Original name: getPanelX
            michal = argFoo;
            entity = argBar;
            michal = michal - entity;
            entity = 2;
            entity = michal / entity;
            return entity;
        };
        michal = {};
        entity['__closure'] = michal;
        michal = 6050807520832.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot2;
        entity['__initData'] = michal;
        return entity;
    };
    michal = michal.bind(entity)();
    report = 1;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/voice_panel/native/utils/PanelSizeUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getMaxPanelWidth'] = tangon;
    zuuluu['getPanelX'] = michal;
    return entity;
})();