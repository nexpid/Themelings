// app/modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/explicit_media_redaction/hooks/useExplicitContentSettingsOrDefault.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() {
        _fun69155: for(var _fun69155_ip = 0; ; ) switch(_fun69155_ip) {
 0:
            golf = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 1;
            entity = zulu[entity];
            report = undefined;
            options = golf.bind(report)(entity);
            oscar = options.useStateFromStoresObject;
            entity = _closure1_slot2;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                _fun69156: for(var _fun69156_ip = 0; ; ) switch(_fun69156_ip) {
 0:
                    entity = _closure1_slot2;
                    entity = entity.settings;
                    report = entity.textAndImages;
                    zulu = null;
                    oscar = zulu == report;
                    tango = undefined;
                    entity = undefined;
                    if(oscar) { _fun69156_ip = 38; continue _fun69156 }
 32:
                    entity = report.explicitContentSettings;
 38:
                    if(!(zulu == entity)) { _fun69156_ip = 72; continue _fun69156 }
 42:
                    zulu = _closure1_slot0;
                    report = _closure1_slot1;
                    mike = 2;
                    mike = report[mike];
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.getExplicitContentSettingOrDefault;
                    entity = mike.bind(zulu)();
 72:
                    return entity;
                }
            };
            oscar = oscar.bind(options)(tango, entity);
            entity = {};
            tango = 2;
            zulu = zulu[tango];
            verify = golf.bind(report)(zulu);
            options = verify.resolveSettingWithDefaults;
            zulu = {};
            golf = null;
            yankee = golf == oscar;
            offset = undefined;
            if(yankee) { _fun69155_ip = 97; continue _fun69155 }
 91:
            offset = oscar.explicitContentGuilds;
 97:
            zulu['setting'] = offset;
            zulu = options.bind(verify)(zulu);
            entity['explicitContentGuilds'] = zulu;
            options = _closure1_slot0;
            zulu = _closure1_slot1;
            zulu = zulu[tango];
            verify = options.bind(report)(zulu);
            options = verify.resolveSettingWithDefaults;
            zulu = {};
            yankee = golf == oscar;
            offset = undefined;
            if(yankee) { _fun69155_ip = 152; continue _fun69155 }
 146:
            offset = oscar.explicitContentNonFriendDm;
 152:
            zulu['setting'] = offset;
            offset = true;
            zulu['isDm'] = offset;
            zulu = options.bind(verify)(zulu);
            entity['explicitContentNonFriendDm'] = zulu;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[tango];
            tango = zulu.bind(report)(mike);
            zulu = tango.resolveSettingWithDefaults;
            mike = {'setting': null, 'isDm': true, 'isFriend': true};
            golf = golf == oscar;
            report = undefined;
            if(golf) { _fun69155_ip = 222; continue _fun69155 }
 216:
            report = oscar.explicitContentFriendDm;
 222:
            mike['setting'] = report;
            mike = zulu.bind(tango)(mike);
            entity['explicitContentFriendDm'] = mike;
            return entity;
        }
    };
    zulu['useExplicitContentSettingOrDefault'] = mike;
    return entity;
})();