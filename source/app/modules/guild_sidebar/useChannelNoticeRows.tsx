// app/modules/guild_sidebar/useChannelNoticeRows.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelListChannelNoticeRow;
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MFALevels;
    var _closure1_slot7 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_sidebar/useChannelNoticeRows.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useChannelNoticeRows
        zulu = argFoo;
        report = argBar;
        var _closure2_slot0 = zulu;
        var _closure2_slot1 = report;
        oscar = zulu.id;
        var _closure2_slot2 = oscar;
        verify = _closure1_slot0;
        offset = _closure1_slot1;
        golf = 6;
        options = offset[golf];
        tango = undefined;
        foxtrot = verify.bind(tango)(options);
        romeo = foxtrot.useStateFromStores;
        options = _closure1_slot3;
        yankee = new Array(1);
        yankee[0] = options;
        options = function() {
            zulu = _closure1_slot3;
            mike = zulu.hasProgress;
            entity = _closure2_slot2;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        options = romeo.bind(foxtrot)(yankee, options);
        var _closure2_slot3 = options;
        romeo = _closure1_slot5;
        yankee = romeo.getCurrentUser;
        backup = yankee.bind(romeo)();
        var _closure2_slot4 = backup;
        golf = offset[golf];
        foxtrot = verify.bind(tango)(golf);
        romeo = foxtrot.useStateFromStores;
        golf = _closure1_slot4;
        yankee = new Array(1);
        yankee[0] = golf;
        golf = new Array(3);
        golf[0] = backup;
        zulu = zulu.mfaLevel;
        golf[1] = zulu;
        golf[2] = oscar;
        zulu = function() {
            _fun116131: for(var _fun116131_ip = 0; ; ) switch(_fun116131_ip) {
 0:
                zulu = _closure2_slot4;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun116131_ip = 43; continue _fun116131 }
 16:
                zulu = _closure2_slot0;
                tango = zulu.mfaLevel;
                zulu = _closure1_slot7;
                zulu = zulu.ELEVATED;
                entity = tango === zulu;
 43:
                if(!entity) { _fun116131_ip = 59; continue _fun116131 }
 46:
                zulu = _closure2_slot4;
                zulu = zulu.mfaEnabled;
                entity = !zulu;
 59:
                if(!entity) { _fun116131_ip = 84; continue _fun116131 }
 62:
                tango = _closure1_slot4;
                zulu = tango.hasElevatedPermissions;
                mike = _closure2_slot2;
                entity = zulu.bind(tango)(mike);
 84:
                return entity;
            }
        };
        golf = romeo.bind(foxtrot)(yankee, zulu, golf);
        var _closure2_slot5 = golf;
        zulu = 7;
        zulu = offset[zulu];
        tango = verify.bind(tango)(zulu);
        zulu = tango.useGuildHasLiveChannelNotice;
        oscar = zulu.bind(tango)(oscar);
        var _closure2_slot6 = oscar;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(4);
        mike[0] = options;
        mike[1] = golf;
        mike[2] = oscar;
        mike[3] = report;
        entity = function() {
            _fun116132: for(var _fun116132_ip = 0; ; ) switch(_fun116132_ip) {
 0:
                entity = _closure2_slot1;
                if(entity) { _fun116132_ip = 16; continue _fun116132 }
 10:
                entity = new Array(0);
                _fun116132_ip = 40; continue _fun116132;
 16:
                zulu = _closure1_slot6;
                tango = zulu.SPACER;
                zulu = new Array(1);
                zulu[0] = tango;
                entity = zulu;
 40:
                zulu = _closure2_slot3;
                if(zulu) { _fun116132_ip = 79; continue _fun116132 }
 47:
                zulu = _closure2_slot5;
                if(!zulu) { _fun116132_ip = 102; continue _fun116132 }
 54:
                tango = entity.push;
                zulu = _closure1_slot6;
                zulu = zulu.MFA_WARNING;
                zulu = tango.bind(entity)(zulu);
                _fun116132_ip = 102; continue _fun116132;
 79:
                tango = entity.push;
                zulu = _closure1_slot6;
                zulu = zulu.GUILD_PROGRESS;
                zulu = tango.bind(entity)(zulu);
 102:
                mike = _closure2_slot6;
                if(!mike) { _fun116132_ip = 132; continue _fun116132 }
 109:
                zulu = entity.push;
                mike = _closure1_slot6;
                mike = mike.LIVE_CHANNEL_NOTICE;
                mike = zulu.bind(entity)(mike);
 132:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();