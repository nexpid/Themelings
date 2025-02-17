// app/modules/user_profile/hooks/useProfileTheme.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Color;
    var _closure1_slot5 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/hooks/useProfileTheme.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useProfileTheme
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            backup = entity.user;
            foxtrot = entity.displayProfile;
            yankee = entity.pendingThemeColors;
            romeo = entity.pendingAvatar;
            entity = entity.isPreview;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 3;
            mike = tango[mike];
            verify = undefined;
            mike = zulu.bind(verify)(mike);
            report = mike.bind(verify)();
            zulu = _closure1_slot0;
            mike = 4;
            mike = tango[mike];
            golf = zulu.bind(verify)(mike);
            tango = golf.useStateFromStores;
            mike = _closure1_slot4;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                entity = _closure1_slot4;
                entity = entity.syncProfileThemeWithUserTheme;
                return entity;
            };
            options = tango.bind(golf)(zulu, mike);
            golf = null;
            if(!(golf == romeo)) { _fun00002_ip = 154; continue _fun00001 }
 113:
            zulu = golf == backup;
            mike = undefined;
            if(zulu) { _fun00002_ip = 151; continue _fun00001 }
 122:
            offset = backup.getAvatarURL;
            zulu = golf == foxtrot;
            tango = undefined;
            if(zulu) { _fun00002_ip = 142; continue _fun00001 }
 137:
            tango = foxtrot.guildId;
 142:
            zulu = 80;
            mike = offset.bind(backup)(tango, zulu);
 151:
            romeo = mike;
 154:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 5;
            mike = tango[mike];
            backup = zulu.bind(verify)(mike);
            offset = backup.useColorValue;
            mike = _closure1_slot5;
            mike = mike.PRIMARY_530;
            mike = offset.bind(backup)(mike);
            offset = mike.hex;
            mike = 6;
            mike = tango[mike];
            tango = zulu.bind(verify)(mike);
            zulu = tango.useAvatarColors;
            mike = false;
            tango = zulu.bind(tango)(romeo, offset, mike);
            zulu = _closure1_slot3;
            mike = 2;
            zulu = zulu.bind(verify)(tango, mike);
            mike = 0;
            romeo = zulu[mike];
            tango = 1;
            offset = zulu[tango];
            if(!(golf != foxtrot)) { _fun00002_ip = 268; continue _fun00001 }
 257:
            zulu = foxtrot.canEditThemes;
            if(zulu) { _fun00002_ip = 289; continue _fun00001 }
 268:
            if(entity) { _fun00002_ip = 289; continue _fun00001 }
 271:
            entity = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            entity['theme'] = report;
            return entity;
 289:
            zulu = golf == foxtrot;
            entity = undefined;
            if(zulu) { _fun00002_ip = 311; continue _fun00001 }
 298:
            zulu = foxtrot.getPreviewThemeColors;
            entity = zulu.bind(foxtrot)(yankee);
 311:
            yankee = golf == entity;
            zulu = undefined;
            if(yankee) { _fun00002_ip = 324; continue _fun00001 }
 320:
            zulu = entity[mike];
 324:
            if(!(golf == zulu)) { _fun00002_ip = 359; continue _fun00001 }
 328:
            yankee = _closure1_slot0;
            foxtrot = _closure1_slot2;
            mike = 7;
            mike = foxtrot[mike];
            yankee = yankee.bind(verify)(mike);
            mike = yankee.hex2int;
            zulu = mike.bind(yankee)(romeo);
 359:
            yankee = golf == entity;
            mike = undefined;
            if(yankee) { _fun00002_ip = 372; continue _fun00001 }
 368:
            mike = entity[tango];
 372:
            if(!(golf == mike)) { _fun00002_ip = 407; continue _fun00001 }
 376:
            tango = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 7;
            entity = yankee[entity];
            tango = tango.bind(verify)(entity);
            entity = tango.hex2int;
            mike = entity.bind(tango)(offset);
 407:
            entity = {};
            tango = report;
            if(options) { _fun00002_ip = 456; continue _fun00001 }
 415:
            options = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 8;
            oscar = offset[oscar];
            options = options.bind(verify)(oscar);
            oscar = options.getProfileTheme;
            oscar = oscar.bind(options)(zulu);
            if(!(golf != oscar)) { _fun00002_ip = 453; continue _fun00001 }
 450:
            report = oscar;
 453:
            tango = report;
 456:
            entity['theme'] = tango;
            entity['primaryColor'] = zulu;
            entity['secondaryColor'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();