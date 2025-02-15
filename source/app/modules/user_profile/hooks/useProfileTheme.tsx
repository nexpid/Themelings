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
        _fun77222: for(var _fun77222_ip = 0; ; ) switch(_fun77222_ip) {
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
            if(!(golf == romeo)) { _fun77222_ip = 156; continue _fun77222 }
 115:
            zulu = golf == backup;
            mike = undefined;
            if(zulu) { _fun77222_ip = 153; continue _fun77222 }
 124:
            offset = backup.getAvatarURL;
            zulu = golf == foxtrot;
            tango = undefined;
            if(zulu) { _fun77222_ip = 144; continue _fun77222 }
 139:
            tango = foxtrot.guildId;
 144:
            zulu = 80;
            mike = offset.bind(backup)(tango, zulu);
 153:
            romeo = mike;
 156:
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
            if(!(golf != foxtrot)) { _fun77222_ip = 270; continue _fun77222 }
 259:
            zulu = foxtrot.canEditThemes;
            if(zulu) { _fun77222_ip = 291; continue _fun77222 }
 270:
            if(entity) { _fun77222_ip = 291; continue _fun77222 }
 273:
            entity = {'theme': null, 'primaryColor': null, 'secondaryColor': null};
            entity['theme'] = report;
            return entity;
 291:
            zulu = golf == foxtrot;
            entity = undefined;
            if(zulu) { _fun77222_ip = 313; continue _fun77222 }
 300:
            zulu = foxtrot.getPreviewThemeColors;
            entity = zulu.bind(foxtrot)(yankee);
 313:
            yankee = golf == entity;
            zulu = undefined;
            if(yankee) { _fun77222_ip = 326; continue _fun77222 }
 322:
            zulu = entity[mike];
 326:
            if(!(golf == zulu)) { _fun77222_ip = 361; continue _fun77222 }
 330:
            yankee = _closure1_slot0;
            foxtrot = _closure1_slot2;
            mike = 7;
            mike = foxtrot[mike];
            yankee = yankee.bind(verify)(mike);
            mike = yankee.hex2int;
            zulu = mike.bind(yankee)(romeo);
 361:
            yankee = golf == entity;
            mike = undefined;
            if(yankee) { _fun77222_ip = 374; continue _fun77222 }
 370:
            mike = entity[tango];
 374:
            if(!(golf == mike)) { _fun77222_ip = 409; continue _fun77222 }
 378:
            tango = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 7;
            entity = yankee[entity];
            tango = tango.bind(verify)(entity);
            entity = tango.hex2int;
            mike = entity.bind(tango)(offset);
 409:
            entity = {};
            tango = report;
            if(options) { _fun77222_ip = 458; continue _fun77222 }
 417:
            options = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 8;
            oscar = offset[oscar];
            options = options.bind(verify)(oscar);
            oscar = options.getProfileTheme;
            oscar = oscar.bind(options)(zulu);
            if(!(golf != oscar)) { _fun77222_ip = 455; continue _fun77222 }
 452:
            report = oscar;
 455:
            tango = report;
 458:
            entity['theme'] = tango;
            entity['primaryColor'] = zulu;
            entity['secondaryColor'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();