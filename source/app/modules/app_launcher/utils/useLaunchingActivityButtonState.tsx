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
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/utils/useLaunchingActivityButtonState.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useLaunchingActivityButtonState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.applicationId;
            var _closure2_slot0 = zuuluu;
            zuuluu = michal.context;
            oscard = michal.launchingComponentId;
            golfie = michal.onSubmissionComplete;
            var _closure2_slot1 = golfie;
            report = undefined;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            option = zuuluu.type;
            tangon = 'channel';
            michal = undefined;
            if(!(tangon === option)) { _fun00002_ip = 74; continue _fun00001 }
 64:
            zuuluu = zuuluu.channel;
            michal = zuuluu.id;
 74:
            _closure2_slot2 = michal;
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 2;
            michal = option[michal];
            verify = zuuluu.bind(report)(michal);
            option = verify.useStateFromStores;
            michal = _closure1_slot4;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                tangon = _closure1_slot4;
                zuuluu = tangon.getLaunchState;
                michal = _closure2_slot0;
                entity = _closure2_slot2;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal = option.bind(verify)(zuuluu, michal);
            zuuluu = null;
            zuuluu = zuuluu != michal;
            if(!zuuluu) { _fun00002_ip = 146; continue _fun00001 }
 140:
            zuuluu = michal.isLaunching;
 146:
            if(!zuuluu) { _fun00002_ip = 159; continue _fun00001 }
 149:
            michal = michal.componentId;
            zuuluu = michal === oscard;
 159:
            _closure2_slot3 = zuuluu;
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            michal = 3;
            michal = option[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.bind(report)(zuuluu);
            _closure2_slot4 = michal;
            oscard = _closure1_slot3;
            report = oscard.useEffect;
            tangon = new Array(3);
            tangon[0] = zuuluu;
            tangon[1] = michal;
            tangon[2] = golfie;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot3;
                    michal = !michal;
                    if(!michal) { _fun00004_ip = 17; continue _fun00003 }
 13:
                    michal = _closure2_slot4;
 17:
                    if(!michal) { _fun00004_ip = 40; continue _fun00003 }
 20:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00004_ip = 40; continue _fun00003 }
 30:
                    michal = _closure2_slot1;
                    entity = undefined;
                    entity = michal.bind(entity)();
 40:
                    entity = undefined;
                    return entity;
                }
            };
            entity = report.bind(oscard)(entity, tangon);
            entity = {};
            entity['submitting'] = zuuluu;
            entity['wasSubmitting'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();