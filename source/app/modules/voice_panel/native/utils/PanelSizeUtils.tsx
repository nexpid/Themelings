// app/modules/voice_panel/native/utils/PanelSizeUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    tango = tango.VOICE_PANEL_DRAWER_MAX_WIDTH;
    var _closure1_slot0 = tango;
    tango = {};
    report = 'function getMaxPanelWidth_PanelSizeUtilsTsx1({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeAreaLeft,safeAreaRight:safeAreaRight}){const{VOICE_PANEL_DRAWER_MAX_WIDTH}=this.__closure;return Math.min(windowWidth,connected?windowWidth:Math.min(VOICE_PANEL_DRAWER_MAX_WIDTH,windowWidth-safeAreaLeft-safeAreaRight));}';
    tango['code'] = report;
    var _closure1_slot1 = tango;
    tango = function() {
        entity = function(argFoo) { // Original name: getMaxPanelWidth
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                tango = entity.windowWidth;
                golf = entity.connected;
                report = entity.safeAreaLeft;
                verify = entity.safeAreaRight;
                oscar = global;
                zulu = oscar.Math;
                mike = zulu.min;
                entity = tango;
                if(golf) { _fun00002_ip = 78; continue _fun00001 }
 46:
                options = oscar.Math;
                golf = options.min;
                oscar = _closure1_slot0;
                report = tango - report;
                report = report - verify;
                entity = golf.bind(options)(oscar, report);
 78:
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            }
        };
        zulu = {};
        tango = _closure1_slot0;
        zulu['VOICE_PANEL_DRAWER_MAX_WIDTH'] = tango;
        entity['__closure'] = zulu;
        zulu = 6813992446153.0;
        entity['__workletHash'] = zulu;
        mike = _closure1_slot1;
        entity['__initData'] = mike;
        return entity;
    };
    tango = tango.bind(entity)();
    report = {};
    options = 'function getPanelX_PanelSizeUtilsTsx2(windowWidth,width){return(windowWidth-width)/2;}';
    report['code'] = options;
    var _closure1_slot2 = report;
    mike = function() {
        entity = function(argFoo, argBar) { // Original name: getPanelX
            mike = argFoo;
            entity = argBar;
            mike = mike - entity;
            entity = 2;
            entity = mike / entity;
            return entity;
        };
        mike = {};
        entity['__closure'] = mike;
        mike = 6050807520832.0;
        entity['__workletHash'] = mike;
        mike = _closure1_slot2;
        entity['__initData'] = mike;
        return entity;
    };
    mike = mike.bind(entity)();
    report = 1;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/voice_panel/native/utils/PanelSizeUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['getMaxPanelWidth'] = tango;
    zulu['getPanelX'] = mike;
    return entity;
})();