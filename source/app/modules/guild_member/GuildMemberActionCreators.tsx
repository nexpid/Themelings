// app/modules/guild_member/GuildMemberActionCreators.tsx
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
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_member/GuildMemberActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: updateGuildSelfMember
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            oscar = argBar;
            options = arguments[2];
            entity = undefined;
            if(!(options === entity)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            options = false;
 17:
            tango = _closure1_slot3;
            zulu = tango.isFullServerPreview;
            zulu = zulu.bind(tango)(report);
            if(zulu) { _fun00002_ip = 186; continue _fun00001 }
 41:
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 3;
            zulu = golf[zulu];
            verify = tango.bind(entity)(zulu);
            tango = verify.dispatch;
            zulu = {};
            offset = 'GUILD_MEMBER_UPDATE_LOCAL';
            zulu['type'] = offset;
            zulu['guildId'] = report;
            offset = oscar.roles;
            zulu['roles'] = offset;
            offset = oscar.flags;
            zulu['flags'] = offset;
            zulu = tango.bind(verify)(zulu);
            tango = _closure1_slot0;
            zulu = 4;
            zulu = golf[zulu];
            zulu = tango.bind(entity)(zulu);
            golf = zulu.HTTP;
            tango = golf.patch;
            zulu = {};
            offset = _closure1_slot4;
            verify = offset.SET_GUILD_MEMBER;
            verify = verify.bind(offset)(report);
            zulu['url'] = verify;
            zulu['body'] = oscar;
            verify = !options;
            options = !verify;
            if(!verify) { _fun00002_ip = 168; continue _fun00001 }
 166:
            options = undefined;
 168:
            zulu['oldFormErrors'] = options;
            options = false;
            zulu['rejectWithError'] = options;
            zulu = tango.bind(golf)(zulu);
            return zulu;
 186:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 2;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.updateImpersonatedData;
            mike = {};
            mike['memberOptions'] = oscar;
            mike = zulu.bind(tango)(report, mike);
            return entity;
        }
    };
    zulu['updateGuildSelfMember'] = mike;
    return entity;
})();