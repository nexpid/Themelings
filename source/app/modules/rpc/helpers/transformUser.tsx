// app/modules/rpc/helpers/transformUser.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 1;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/helpers/transformUser.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: transformUser
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            offset = entity.id;
            verify = entity.username;
            golf = entity.discriminator;
            oscar = entity.globalName;
            mike = entity.avatar;
            options = entity.avatarDecoration;
            report = entity.bot;
            tango = entity.flags;
            zulu = entity.premiumType;
            entity = {};
            entity['id'] = offset;
            entity['username'] = verify;
            entity['discriminator'] = golf;
            entity['global_name'] = oscar;
            entity['avatar'] = mike;
            verify = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 0;
            golf = oscar[mike];
            oscar = undefined;
            golf = verify.bind(oscar)(golf);
            oscar = golf.parseAvatarDecorationData;
            oscar = oscar.bind(golf)(options);
            entity['avatar_decoration_data'] = oscar;
            entity['bot'] = report;
            entity['flags'] = tango;
            tango = null;
            tango = tango != zulu;
            if(!tango) { _fun00002_ip = 140; continue _fun00001 }
 137:
            mike = zulu;
 140:
            entity['premium_type'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();