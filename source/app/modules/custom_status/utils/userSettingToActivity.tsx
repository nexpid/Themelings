// app/modules/custom_status/utils/userSettingToActivity.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _activityFromSetting
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = argBar;
            report = null;
            if(!(report == zuuluu)) { _fun00002_ip = 159; continue _fun00001 }
 15:
            entity = tangon.emojiName;
            entity = report != entity;
            michal = null;
            if(!entity) { _fun00002_ip = 193; continue _fun00001 }
 33:
            oscard = tangon.emojiName;
            entity = '';
            michal = null;
            if(!(entity !== oscard)) { _fun00002_ip = 193; continue _fun00001 }
 52:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 3;
            oscard = offset[entity];
            option = undefined;
            golfie = verify.bind(option)(oscard);
            oscard = golfie.getByName;
            entity = offset[entity];
            offset = verify.bind(option)(entity);
            verify = offset.convertSurrogateToName;
            option = tangon.emojiName;
            entity = false;
            entity = verify.bind(offset)(option, entity);
            golfie = oscard.bind(golfie)(entity);
            oscard = report != golfie;
            entity = null;
            if(!oscard) { _fun00002_ip = 154; continue _fun00001 }
 126:
            oscard = {'id': null, 'name': null, 'animated': false};
            golfie = golfie.surrogates;
            oscard['name'] = golfie;
            entity = oscard;
 154:
            michal = entity;
            _fun00002_ip = 193; continue _fun00001;
 159:
            entity = {};
            oscard = zuuluu.id;
            entity['id'] = oscard;
            oscard = zuuluu.name;
            entity['name'] = oscard;
            zuuluu = zuuluu.animated;
            entity['animated'] = zuuluu;
            michal = entity;
 193:
            entity = global;
            oscard = entity.Number;
            entity = tangon.expiresAtMs;
            zuuluu = undefined;
            option = oscard.bind(zuuluu)(entity);
            entity = {};
            oscard = 'Custom Status';
            entity['name'] = oscard;
            oscard = _closure1_slot5;
            oscard = oscard.CUSTOM_STATUS;
            entity['type'] = oscard;
            oscard = tangon.text;
            golfie = oscard.length;
            oscard = 0;
            verify = golfie > oscard;
            golfie = undefined;
            if(!verify) { _fun00002_ip = 269; continue _fun00001 }
 264:
            golfie = tangon.text;
 269:
            entity['state'] = golfie;
            golfie = option > oscard;
            oscard = undefined;
            if(!golfie) { _fun00002_ip = 291; continue _fun00001 }
 282:
            golfie = {};
            golfie['end'] = option;
            oscard = golfie;
 291:
            entity['timestamps'] = oscard;
            entity['emoji'] = michal;
            michal = {};
            tangon = tangon.label;
            report = report == tangon;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 322; continue _fun00001 }
 317:
            zuuluu = tangon.value;
 322:
            michal['label'] = zuuluu;
            entity['metadata'] = michal;
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useMemo;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ActivityTypes;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/custom_status/utils/userSettingToActivity.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getActivityFromCustomStatus
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            oscard = tangon.emojiId;
            zuuluu = _closure1_slot6;
            golfie = null;
            report = golfie != oscard;
            michal = null;
            if(!report) { _fun00004_ip = 54; continue _fun00003 }
 27:
            report = '0';
            michal = null;
            if(!(report !== oscard)) { _fun00004_ip = 54; continue _fun00003 }
 39:
            report = _closure1_slot4;
            entity = report.getUsableCustomEmojiById;
            michal = entity.bind(report)(oscard);
 54:
            entity = undefined;
            entity = zuuluu.bind(entity)(tangon, michal);
            return entity;
        }
    };
    zuuluu['getActivityFromCustomStatus'] = tangon;
    michal = function() { // Original name: useCustomStatusActivity
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 4;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            zuuluu = report.bind(tangon)(zuuluu);
            report = zuuluu.CustomStatusSetting;
            zuuluu = report.useSetting;
            oscard = zuuluu.bind(report)();
            var _closure2_slot0 = oscard;
            zuuluu = null;
            report = zuuluu == oscard;
            zuuluu = undefined;
            if(report) { _fun00006_ip = 64; continue _fun00005 }
 58:
            zuuluu = oscard.emojiId;
 64:
            var _closure2_slot1 = zuuluu;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            report = 5;
            report = option[report];
            verify = golfie.bind(tangon)(report);
            option = verify.useStateFromStores;
            report = _closure1_slot4;
            golfie = new Array(1);
            golfie[0] = report;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot1;
                    report = null;
                    zuuluu = report != entity;
                    entity = null;
                    if(!zuuluu) { _fun00008_ip = 56; continue _fun00007 }
 18:
                    tangon = _closure2_slot1;
                    zuuluu = '0';
                    entity = null;
                    if(!(zuuluu !== tangon)) { _fun00008_ip = 56; continue _fun00007 }
 34:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.getUsableCustomEmojiById;
                    michal = _closure2_slot1;
                    entity = zuuluu.bind(tangon)(michal);
 56:
                    return entity;
                }
            };
            report = option.bind(verify)(golfie, zuuluu, report);
            var _closure2_slot2 = report;
            zuuluu = _closure1_slot3;
            michal = new Array(2);
            michal[0] = oscard;
            michal[1] = report;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00010_ip = 39; continue _fun00009 }
 16:
                    report = _closure1_slot6;
                    tangon = _closure2_slot0;
                    zuuluu = _closure2_slot2;
                    michal = undefined;
                    entity = report.bind(michal)(tangon, zuuluu);
 39:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['useCustomStatusActivity'] = michal;
    return entity;
})();