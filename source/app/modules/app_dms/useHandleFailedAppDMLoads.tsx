// app/modules/app_dms/useHandleFailedAppDMLoads.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_dms/useHandleFailedAppDMLoads.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useHandleFailedAppDMLoads
        zuuluu = argFoo;
        offset = zuuluu.isProfileFetching;
        var _closure2_slot0 = offset;
        verify = zuuluu.wasProfileFetching;
        var _closure2_slot1 = verify;
        entity = zuuluu.applicationId;
        var _closure2_slot2 = entity;
        oscard = zuuluu.channelId;
        var _closure2_slot3 = oscard;
        golfie = zuuluu.commands;
        var _closure2_slot4 = golfie;
        report = _closure1_slot2;
        option = report.useEffect;
        tangon = new Array(4);
        tangon[0] = offset;
        tangon[1] = verify;
        tangon[2] = entity;
        tangon[3] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot0;
                michal = !michal;
                if(!michal) { _fun00002_ip = 17; continue _fun00001 }
 13:
                michal = _closure2_slot1;
 17:
                if(!michal) { _fun00002_ip = 30; continue _fun00001 }
 20:
                tangon = _closure2_slot2;
                zuuluu = null;
                michal = zuuluu == tangon;
 30:
                if(!michal) { _fun00002_ip = 73; continue _fun00001 }
 33:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 3;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.addFailedAppDMLoadChannel;
                entity = _closure2_slot3;
                entity = michal.bind(zuuluu)(entity);
 73:
                entity = undefined;
                return entity;
            }
        };
        entity = option.bind(report)(entity, tangon);
        option = report.useEffect;
        tangon = new Array(1);
        tangon[0] = oscard;
        entity = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.removeFailedAppDMLoadChannel;
            michal = _closure2_slot3;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = option.bind(report)(entity, tangon);
        option = _closure1_slot0;
        offset = _closure1_slot1;
        tangon = 4;
        verify = offset[tangon];
        entity = undefined;
        backup = option.bind(entity)(verify);
        foxtra = backup.useStateFromStores;
        yankee = _closure1_slot3;
        romeon = new Array(1);
        romeon[0] = yankee;
        verify = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure1_slot3;
                michal = zuuluu.getApplicationState;
                entity = _closure2_slot2;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = null;
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00004_ip = 48; continue _fun00003 }
 36:
                zuuluu = zuuluu.fetchState;
                michal = zuuluu.fetching;
 48:
                entity = entity != michal;
                if(!entity) { _fun00004_ip = 58; continue _fun00003 }
 55:
                entity = michal;
 58:
                return entity;
            }
        };
        verify = foxtra.bind(backup)(romeon, verify);
        var _closure2_slot5 = verify;
        tangon = offset[tangon];
        offset = option.bind(entity)(tangon);
        option = offset.useStateFromStores;
        tangon = new Array(2);
        tangon[0] = yankee;
        zuuluu = _closure1_slot4;
        tangon[1] = zuuluu;
        zuuluu = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = _closure1_slot4;
                zuuluu = tangon.getChannel;
                entity = _closure2_slot3;
                report = zuuluu.bind(tangon)(entity);
                entity = null;
                if(!(entity == report)) { _fun00006_ip = 42; continue _fun00005 }
 30:
                tangon = {};
                zuuluu = 'contextless';
                tangon['type'] = zuuluu;
                _fun00006_ip = 59; continue _fun00005;
 42:
                zuuluu = {};
                zuuluu['channel'] = report;
                report = 'channel';
                zuuluu['type'] = report;
                tangon = zuuluu;
 59:
                zuuluu = _closure1_slot3;
                michal = zuuluu.getContextState;
                zuuluu = michal.bind(zuuluu)(tangon);
                tangon = entity == zuuluu;
                michal = undefined;
                if(tangon) { _fun00006_ip = 95; continue _fun00005 }
 83:
                zuuluu = zuuluu.fetchState;
                michal = zuuluu.fetching;
 95:
                entity = entity != michal;
                if(!entity) { _fun00006_ip = 105; continue _fun00005 }
 102:
                entity = michal;
 105:
                return entity;
            }
        };
        option = option.bind(offset)(tangon, zuuluu);
        var _closure2_slot6 = option;
        zuuluu = report.useRef;
        tangon = false;
        zuuluu = zuuluu.bind(report)(tangon);
        var _closure2_slot7 = zuuluu;
        zuuluu = report.useRef;
        zuuluu = zuuluu.bind(report)(tangon);
        var _closure2_slot8 = zuuluu;
        offset = report.useEffect;
        tangon = new Array(1);
        tangon[0] = oscard;
        zuuluu = function() {
            zuuluu = _closure2_slot7;
            michal = false;
            zuuluu['current'] = michal;
            entity = _closure2_slot8;
            entity['current'] = michal;
            entity = undefined;
            return entity;
        };
        zuuluu = offset.bind(report)(zuuluu, tangon);
        offset = report.useEffect;
        tangon = new Array(1);
        tangon[0] = verify;
        zuuluu = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = _closure2_slot5;
                if(!michal) { _fun00008_ip = 22; continue _fun00007 }
 10:
                michal = _closure2_slot7;
                entity = true;
                michal['current'] = entity;
 22:
                entity = undefined;
                return entity;
            }
        };
        zuuluu = offset.bind(report)(zuuluu, tangon);
        offset = report.useEffect;
        tangon = new Array(1);
        tangon[0] = option;
        zuuluu = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = _closure2_slot6;
                if(!michal) { _fun00010_ip = 22; continue _fun00009 }
 10:
                michal = _closure2_slot8;
                entity = true;
                michal['current'] = entity;
 22:
                entity = undefined;
                return entity;
            }
        };
        zuuluu = offset.bind(report)(zuuluu, tangon);
        tangon = report.useEffect;
        zuuluu = new Array(4);
        zuuluu[0] = verify;
        zuuluu[1] = option;
        zuuluu[2] = golfie;
        zuuluu[3] = oscard;
        michal = function() {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = _closure2_slot5;
                michal = !michal;
                if(!michal) { _fun00012_ip = 20; continue _fun00011 }
 13:
                zuuluu = _closure2_slot6;
                michal = !zuuluu;
 20:
                if(!michal) { _fun00012_ip = 32; continue _fun00011 }
 23:
                zuuluu = _closure2_slot7;
                michal = zuuluu.current;
 32:
                if(!michal) { _fun00012_ip = 44; continue _fun00011 }
 35:
                zuuluu = _closure2_slot8;
                michal = zuuluu.current;
 44:
                if(!michal) { _fun00012_ip = 62; continue _fun00011 }
 47:
                zuuluu = _closure2_slot4;
                tangon = zuuluu.length;
                zuuluu = 0;
                michal = zuuluu === tangon;
 62:
                if(!michal) { _fun00012_ip = 105; continue _fun00011 }
 65:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 3;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.addFailedAppDMLoadChannel;
                entity = _closure2_slot3;
                entity = michal.bind(zuuluu)(entity);
 105:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();