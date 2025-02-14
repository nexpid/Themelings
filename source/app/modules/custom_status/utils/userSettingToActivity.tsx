// app/modules/custom_status/utils/userSettingToActivity.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _activityFromSetting
        _fun68475: for(var _fun68475_ip = 0; ; ) switch(_fun68475_ip) {
 0:
            golf = argFoo;
            zulu = argBar;
            entity = null;
            if(!(entity == zulu)) { _fun68475_ip = 155; continue _fun68475 }
 15:
            mike = golf.emojiName;
            tango = entity != mike;
            mike = null;
            if(!tango) { _fun68475_ip = 189; continue _fun68475 }
 33:
            report = golf.emojiName;
            tango = '';
            mike = null;
            if(!(tango !== report)) { _fun68475_ip = 189; continue _fun68475 }
 52:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            tango = 3;
            report = offset[tango];
            options = undefined;
            oscar = verify.bind(options)(report);
            report = oscar.getByName;
            tango = offset[tango];
            offset = verify.bind(options)(tango);
            verify = offset.convertSurrogateToName;
            options = golf.emojiName;
            tango = false;
            tango = verify.bind(offset)(options, tango);
            report = report.bind(oscar)(tango);
            tango = entity != report;
            entity = null;
            if(!tango) { _fun68475_ip = 150; continue _fun68475 }
 126:
            tango = {'id': null, 'name': null, 'animated': false};
            report = report.surrogates;
            tango['name'] = report;
            entity = tango;
 150:
            mike = entity;
            _fun68475_ip = 189; continue _fun68475;
 155:
            entity = {};
            tango = zulu.id;
            entity['id'] = tango;
            tango = zulu.name;
            entity['name'] = tango;
            zulu = zulu.animated;
            entity['animated'] = zulu;
            mike = entity;
 189:
            entity = global;
            tango = entity.Number;
            entity = golf.expiresAtMs;
            zulu = undefined;
            report = tango.bind(zulu)(entity);
            entity = {};
            tango = 'Custom Status';
            entity['name'] = tango;
            tango = _closure1_slot5;
            tango = tango.CUSTOM_STATUS;
            entity['type'] = tango;
            tango = golf.text;
            oscar = tango.length;
            tango = 0;
            options = oscar > tango;
            oscar = undefined;
            if(!options) { _fun68475_ip = 265; continue _fun68475 }
 260:
            oscar = golf.text;
 265:
            entity['state'] = oscar;
            tango = report > tango;
            zulu = undefined;
            if(!tango) { _fun68475_ip = 287; continue _fun68475 }
 278:
            tango = {};
            tango['end'] = report;
            zulu = tango;
 287:
            entity['timestamps'] = zulu;
            entity['emoji'] = mike;
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.useMemo;
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ActivityTypes;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/custom_status/utils/userSettingToActivity.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getActivityFromCustomStatus
        _fun68476: for(var _fun68476_ip = 0; ; ) switch(_fun68476_ip) {
 0:
            tango = argFoo;
            oscar = tango.emojiId;
            zulu = _closure1_slot6;
            golf = null;
            report = golf != oscar;
            mike = null;
            if(!report) { _fun68476_ip = 54; continue _fun68476 }
 27:
            report = '0';
            mike = null;
            if(!(report !== oscar)) { _fun68476_ip = 54; continue _fun68476 }
 39:
            report = _closure1_slot4;
            entity = report.getUsableCustomEmojiById;
            mike = entity.bind(report)(oscar);
 54:
            entity = undefined;
            entity = zulu.bind(entity)(tango, mike);
            return entity;
        }
    };
    zulu['getActivityFromCustomStatus'] = tango;
    mike = function() { // Original name: useCustomStatusActivity
        _fun68477: for(var _fun68477_ip = 0; ; ) switch(_fun68477_ip) {
 0:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 4;
            zulu = tango[zulu];
            tango = undefined;
            zulu = report.bind(tango)(zulu);
            report = zulu.CustomStatusSetting;
            zulu = report.useSetting;
            oscar = zulu.bind(report)();
            var _closure2_slot0 = oscar;
            zulu = null;
            report = zulu == oscar;
            zulu = undefined;
            if(report) { _fun68477_ip = 64; continue _fun68477 }
 58:
            zulu = oscar.emojiId;
 64:
            var _closure2_slot1 = zulu;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            report = 5;
            report = options[report];
            verify = golf.bind(tango)(report);
            options = verify.useStateFromStores;
            report = _closure1_slot4;
            golf = new Array(1);
            golf[0] = report;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                _fun68478: for(var _fun68478_ip = 0; ; ) switch(_fun68478_ip) {
 0:
                    entity = _closure2_slot1;
                    report = null;
                    zulu = report != entity;
                    entity = null;
                    if(!zulu) { _fun68478_ip = 56; continue _fun68478 }
 18:
                    tango = _closure2_slot1;
                    zulu = '0';
                    entity = null;
                    if(!(zulu !== tango)) { _fun68478_ip = 56; continue _fun68478 }
 34:
                    tango = _closure1_slot4;
                    zulu = tango.getUsableCustomEmojiById;
                    mike = _closure2_slot1;
                    entity = zulu.bind(tango)(mike);
 56:
                    return entity;
                }
            };
            report = options.bind(verify)(golf, zulu, report);
            var _closure2_slot2 = report;
            zulu = _closure1_slot3;
            mike = new Array(2);
            mike[0] = oscar;
            mike[1] = report;
            entity = function() {
                _fun68479: for(var _fun68479_ip = 0; ; ) switch(_fun68479_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun68479_ip = 39; continue _fun68479 }
 16:
                    report = _closure1_slot6;
                    tango = _closure2_slot0;
                    zulu = _closure2_slot2;
                    mike = undefined;
                    entity = report.bind(mike)(tango, zulu);
 39:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['useCustomStatusActivity'] = mike;
    return entity;
})();