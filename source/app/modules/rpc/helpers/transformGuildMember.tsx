// app/modules/rpc/helpers/transformGuildMember.tsx
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
    tango = 'modules/rpc/helpers/transformGuildMember.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: transformGuildMember
        entity = argFoo;
        offset = entity.userId;
        verify = entity.nick;
        golf = entity.guildId;
        oscar = entity.avatar;
        options = entity.avatarDecoration;
        report = entity.banner;
        tango = entity.bio;
        zulu = entity.pronouns;
        mike = entity.colorString;
        entity = {};
        entity['user_id'] = offset;
        entity['nick'] = verify;
        entity['guild_id'] = golf;
        entity['avatar'] = oscar;
        verify = _closure1_slot0;
        golf = _closure1_slot1;
        oscar = 0;
        golf = golf[oscar];
        oscar = undefined;
        golf = verify.bind(oscar)(golf);
        oscar = golf.parseAvatarDecorationData;
        oscar = oscar.bind(golf)(options);
        entity['avatar_decoration_data'] = oscar;
        entity['banner'] = report;
        entity['bio'] = tango;
        entity['pronouns'] = zulu;
        entity['color_string'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();