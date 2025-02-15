// app/modules/guild_onboarding_home/useIsNewMember.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _getIsNewMember
        _fun60176: for(var _fun60176_ip = 0; ; ) switch(_fun60176_ip) {
 0:
            report = argFoo;
            zulu = argBar;
            mike = argBaz;
            entity = mike.isFullServerPreview;
            entity = entity.bind(mike)(report);
            if(entity) { _fun60176_ip = 215; continue _fun60176 }
 26:
            entity = zulu.getSelfMember;
            mike = entity.bind(zulu)(report);
            tango = null;
            if(!(tango != mike)) { _fun60176_ip = 211; continue _fun60176 }
 46:
            entity = zulu.getSelfMemberJoinedAt;
            golf = entity.bind(zulu)(report);
            entity = tango != golf;
            if(!entity) { _fun60176_ip = 209; continue _fun60176 }
 69:
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            report = 3;
            report = oscar[report];
            oscar = undefined;
            options = options.bind(oscar)(report);
            report = options.hasFlag;
            mike = mike.flags;
            verify = tango != mike;
            tango = 0;
            if(!verify) { _fun60176_ip = 117; continue _fun60176 }
 114:
            tango = mike;
 117:
            mike = _closure1_slot5;
            mike = mike.COMPLETED_HOME_ACTIONS;
            mike = report.bind(options)(tango, mike);
            mike = !mike;
            if(!mike) { _fun60176_ip = 206; continue _fun60176 }
 139:
            tango = global;
            report = tango.Date;
            tango = report.now;
            report = tango.bind(report)();
            tango = golf.getTime;
            tango = tango.bind(golf)();
            tango = report - tango;
            report = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 4;
            zulu = golf[zulu];
            zulu = report.bind(oscar)(zulu);
            zulu = zulu.Millis;
            zulu = zulu.WEEK;
            mike = tango < zulu;
 206:
            entity = mike;
 209:
            return entity;
 211:
            entity = false;
            return entity;
 215:
            entity = true;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildMemberFlags;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding_home/useIsNewMember.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useIsNewMember
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 5;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot4;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot3;
        mike[1] = report;
        entity = function() {
            report = _closure1_slot6;
            tango = _closure2_slot0;
            zulu = _closure1_slot4;
            mike = _closure1_slot3;
            entity = undefined;
            entity = report.bind(entity)(tango, zulu, mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: getIsNewMember
        report = _closure1_slot6;
        tango = _closure1_slot4;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = argFoo;
        entity = report.bind(mike)(entity, tango, zulu);
        return entity;
    };
    zulu['getIsNewMember'] = mike;
    return entity;
})();