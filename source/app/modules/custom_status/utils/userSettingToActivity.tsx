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
            option = argFoo;
            tangon = argBar;
            zuuluu = null;
            if(!(zuuluu == tangon)) { _fun00002_ip = 159; continue _fun00001 }
 15:
            entity = option.emojiName;
            entity = zuuluu != entity;
            michal = null;
            if(!entity) { _fun00002_ip = 193; continue _fun00001 }
 33:
            report = option.emojiName;
            entity = '';
            michal = null;
            if(!(entity !== report)) { _fun00002_ip = 193; continue _fun00001 }
 52:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 3;
            report = offset[entity];
            golfie = undefined;
            oscard = verify.bind(golfie)(report);
            report = oscard.getByName;
            entity = offset[entity];
            offset = verify.bind(golfie)(entity);
            verify = offset.convertSurrogateToName;
            golfie = option.emojiName;
            entity = false;
            entity = verify.bind(offset)(golfie, entity);
            oscard = report.bind(oscard)(entity);
            report = zuuluu != oscard;
            entity = null;
            if(!report) { _fun00002_ip = 154; continue _fun00001 }
 126:
            report = {'id': null, 'name': null, 'animated': false};
            oscard = oscard.surrogates;
            report['name'] = oscard;
            entity = report;
 154:
            michal = entity;
            _fun00002_ip = 193; continue _fun00001;
 159:
            entity = {};
            report = tangon.id;
            entity['id'] = report;
            report = tangon.name;
            entity['name'] = report;
            tangon = tangon.animated;
            entity['animated'] = tangon;
            michal = entity;
 193:
            entity = global;
            report = entity.Number;
            entity = option.expiresAtMs;
            tangon = undefined;
            oscard = report.bind(tangon)(entity);
            entity = option.label;
            report = zuuluu == entity;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 233; continue _fun00001 }
 228:
            zuuluu = entity.value;
 233:
            entity = {};
            report = 'Custom Status';
            entity['name'] = report;
            report = _closure1_slot5;
            report = report.CUSTOM_STATUS;
            entity['type'] = report;
            report = option.text;
            golfie = report.length;
            report = 0;
            verify = golfie > report;
            golfie = undefined;
            if(!verify) { _fun00002_ip = 288; continue _fun00001 }
 283:
            golfie = option.text;
 288:
            entity['state'] = golfie;
            report = oscard > report;
            tangon = undefined;
            if(!report) { _fun00002_ip = 310; continue _fun00001 }
 301:
            report = {};
            report['end'] = oscard;
            tangon = report;
 310:
            entity['timestamps'] = tangon;
            entity['emoji'] = michal;
            entity['details'] = zuuluu;
            michal = {};
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