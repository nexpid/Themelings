// app/modules/guild_moderation/native/useKickBanNavigatorCallback.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_moderation/native/useKickBanNavigatorCallback.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useKickBanNavigatorCancelCallback
        michal = argFoo;
        var _closure2_slot0 = michal;
        oscard = _closure1_slot0;
        report = _closure1_slot1;
        tangon = 1;
        report = report[tangon];
        tangon = undefined;
        report = oscard.bind(tangon)(report);
        tangon = report.useNavigation;
        report = tangon.bind(report)();
        var _closure2_slot1 = report;
        tangon = _closure1_slot2;
        oscard = tangon.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = michal;
        zuuluu[1] = report;
        michal = function() {
            tangon = _closure2_slot1;
            zuuluu = tangon.addListener;
            michal = 'beforeRemove';
            entity = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zuuluu = argFoo;
                    var _closure4_slot0 = zuuluu;
                    tangon = _closure2_slot2;
                    tangon = tangon.current;
                    if(tangon) { _fun00002_ip = 170; continue _fun00001 }
 27:
                    zuuluu = zuuluu.data;
                    zuuluu = zuuluu.action;
                    tangon = zuuluu.type;
                    zuuluu = 'POP';
                    if(!(zuuluu === tangon)) { _fun00002_ip = 90; continue _fun00001 }
 52:
                    report = _closure1_slot0;
                    tangon = _closure1_slot1;
                    zuuluu = 2;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.isIOS;
                    tangon = tangon.bind(report)();
                    if(tangon) { _fun00002_ip = 142; continue _fun00001 }
 90:
                    report = _closure2_slot0;
                    tangon = null;
                    if(!(tangon != report)) { _fun00002_ip = 170; continue _fun00001 }
 100:
                    report = _closure2_slot0;
                    tangon = {};
                    oscard = true;
                    tangon['preventable'] = oscard;
                    oscard = function() { // Original name: preventDefault
                        michal = _closure4_slot0;
                        entity = michal.preventDefault;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    tangon['preventDefault'] = oscard;
                    michal = function() { // Original name: goBack
                        michal = _closure2_slot1;
                        entity = michal.goBack;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    tangon['goBack'] = michal;
                    michal = undefined;
                    michal = report.bind(michal)(tangon);
                    _fun00002_ip = 170; continue _fun00001;
 142:
                    tangon = _closure2_slot0;
                    michal = null;
                    if(!(michal != tangon)) { _fun00002_ip = 170; continue _fun00001 }
 152:
                    michal = _closure2_slot0;
                    entity = {};
                    tangon = false;
                    entity['preventable'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 170:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        michal = oscard.bind(tangon)(michal, zuuluu);
        zuuluu = tangon.useRef;
        michal = false;
        michal = zuuluu.bind(tangon)(michal);
        var _closure2_slot2 = michal;
        zuuluu = tangon.useCallback;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            zuuluu = _closure2_slot2;
            michal = true;
            zuuluu['current'] = michal;
            michal = _closure2_slot1;
            entity = michal.goBack;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();