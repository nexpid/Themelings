// app/modules/app_launcher/utils/useLaunchingActivityButtonState.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/utils/useLaunchingActivityButtonState.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useLaunchingActivityButtonState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            offset = michal.applicationId;
            var _closure2_slot0 = offset;
            zuuluu = michal.context;
            var _closure2_slot1 = zuuluu;
            verify = michal.launchingComponentId;
            option = michal.onSubmissionComplete;
            var _closure2_slot2 = option;
            oscard = undefined;
            var _closure2_slot3 = oscard;
            var _closure2_slot4 = oscard;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 2;
            michal = tangon[michal];
            golfie = zuuluu.bind(oscard)(michal);
            michal = golfie.useGetOrFetchApplication;
            yankee = michal.bind(golfie)(offset);
            michal = 3;
            michal = tangon[michal];
            golfie = zuuluu.bind(oscard)(michal);
            tangon = golfie.useStateFromStores;
            michal = _closure1_slot4;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.getLaunchState;
                    michal = _closure2_slot0;
                    entity = _closure2_slot1;
                    golfie = entity.type;
                    oscard = 'channel';
                    entity = undefined;
                    if(!(oscard === golfie)) { _fun00004_ip = 53; continue _fun00003 }
 39:
                    report = _closure2_slot1;
                    report = report.channel;
                    entity = report.id;
 53:
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            golfie = tangon.bind(golfie)(zuuluu, michal);
            michal = null;
            zuuluu = michal != yankee;
            if(!zuuluu) { _fun00002_ip = 165; continue _fun00001 }
 134:
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            tangon = 4;
            tangon = romeon[tangon];
            offset = offset.bind(oscard)(tangon);
            tangon = offset.canLaunchFrame;
            zuuluu = tangon.bind(offset)(yankee);
 165:
            tangon = !zuuluu;
            if(!tangon) { _fun00002_ip = 200; continue _fun00001 }
 171:
            zuuluu = michal != golfie;
            if(!zuuluu) { _fun00002_ip = 184; continue _fun00001 }
 178:
            zuuluu = golfie.isLaunching;
 184:
            if(!zuuluu) { _fun00002_ip = 197; continue _fun00001 }
 187:
            golfie = golfie.componentId;
            zuuluu = golfie === verify;
 197:
            tangon = zuuluu;
 200:
            _closure2_slot3 = tangon;
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 5;
            zuuluu = verify[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.bind(oscard)(tangon);
            _closure2_slot4 = zuuluu;
            golfie = _closure1_slot3;
            oscard = golfie.useEffect;
            report = new Array(3);
            report[0] = tangon;
            report[1] = zuuluu;
            report[2] = option;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot3;
                    michal = !michal;
                    if(!michal) { _fun00006_ip = 17; continue _fun00005 }
 13:
                    michal = _closure2_slot4;
 17:
                    if(!michal) { _fun00006_ip = 40; continue _fun00005 }
 20:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00006_ip = 40; continue _fun00005 }
 30:
                    michal = _closure2_slot2;
                    entity = undefined;
                    entity = michal.bind(entity)();
 40:
                    entity = undefined;
                    return entity;
                }
            };
            entity = oscard.bind(golfie)(entity, report);
            entity = {};
            entity['submitting'] = tangon;
            tangon = michal != zuuluu;
            michal = null;
            if(!tangon) { _fun00002_ip = 290; continue _fun00001 }
 287:
            michal = zuuluu;
 290:
            entity['wasSubmitting'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();