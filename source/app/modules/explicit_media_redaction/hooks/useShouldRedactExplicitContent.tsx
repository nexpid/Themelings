// app/modules/explicit_media_redaction/hooks/useShouldRedactExplicitContent.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/explicit_media_redaction/hooks/useShouldRedactExplicitContent.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            offset = argBar;
            mike = argFoo;
            var _closure2_slot0 = mike;
            var _closure2_slot1 = offset;
            yankee = _closure1_slot0;
            romeo = _closure1_slot1;
            mike = 3;
            mike = romeo[mike];
            oscar = undefined;
            tango = yankee.bind(oscar)(mike);
            mike = tango.useExplicitContentSettingOrDefault;
            tango = mike.bind(tango)();
            mike = tango.explicitContentGuilds;
            report = tango.explicitContentFriendDm;
            options = tango.explicitContentNonFriendDm;
            verify = 4;
            tango = romeo[verify];
            backup = yankee.bind(oscar)(tango);
            foxtrot = backup.useStateFromStores;
            tango = _closure1_slot3;
            golf = new Array(1);
            golf[0] = tango;
            tango = function() {
                mike = _closure1_slot3;
                entity = mike.getFriendIDs;
                zulu = entity.bind(mike)();
                mike = zulu.includes;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = foxtrot.bind(backup)(golf, tango);
            golf = romeo[verify];
            kilo = yankee.bind(oscar)(golf);
            backup = kilo.useStateFromStores;
            golf = _closure1_slot4;
            foxtrot = new Array(1);
            foxtrot[0] = golf;
            golf = function() {
                mike = _closure1_slot4;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            golf = backup.bind(kilo)(foxtrot, golf);
            verify = romeo[verify];
            romeo = yankee.bind(oscar)(verify);
            yankee = romeo.useStateFromStores;
            foxtrot = _closure1_slot2;
            verify = new Array(1);
            verify[0] = foxtrot;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure1_slot2;
                    mike = zulu.getChannel;
                    entity = _closure2_slot0;
                    zulu = mike.bind(zulu)(entity);
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00004_ip = 43; continue _fun00003 }
 33:
                    mike = zulu.isPrivate;
                    entity = mike.bind(zulu)();
 43:
                    return entity;
                }
            };
            verify = yankee.bind(romeo)(verify, entity);
            entity = null;
            entity = entity != golf;
            if(!entity) { _fun00002_ip = 207; continue _fun00001 }
 198:
            golf = golf.id;
            entity = golf !== offset;
 207:
            if(!entity) { _fun00002_ip = 293; continue _fun00001 }
 210:
            if(!verify) { _fun00002_ip = 216; continue _fun00001 }
 213:
            if(tango) { _fun00002_ip = 259; continue _fun00001 }
 216:
            golf = _closure1_slot0;
            offset = _closure1_slot1;
            tango = 5;
            tango = offset[tango];
            golf = golf.bind(oscar)(tango);
            tango = golf.getShouldObscureForSetting;
            if(verify) { _fun00002_ip = 252; continue _fun00001 }
 245:
            mike = tango.bind(golf)(mike);
            _fun00002_ip = 257; continue _fun00001;
 252:
            mike = tango.bind(golf)(options);
 257:
            _fun00002_ip = 290; continue _fun00001;
 259:
            tango = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 5;
            zulu = golf[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = tango.getShouldObscureForSetting;
            mike = zulu.bind(tango)(report);
 290:
            entity = mike;
 293:
            return entity;
        }
    };
    zulu['useShouldRedactExplicitContent'] = tango;
    mike = function() {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 3;
            entity = oscar[entity];
            report = undefined;
            tango = zulu.bind(report)(entity);
            entity = tango.useExplicitContentSettingOrDefault;
            entity = entity.bind(tango)();
            tango = entity.explicitContentGuilds;
            entity = 4;
            entity = oscar[entity];
            golf = zulu.bind(report)(entity);
            oscar = golf.useStateFromStores;
            entity = _closure1_slot4;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                mike = _closure1_slot4;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = oscar.bind(golf)(zulu, entity);
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun00006_ip = 125; continue _fun00005 }
 94:
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 5;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.getShouldObscureForSetting;
            entity = mike.bind(zulu)(tango);
 125:
            return entity;
        }
    };
    zulu['useShouldRedactExplicitContentForForum'] = mike;
    return entity;
})();