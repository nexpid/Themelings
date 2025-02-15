// app/modules/opt_in_channels/useShowChannelOptInNotice.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NULL_STRING_GUILD_ID;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelFlags;
    var _closure1_slot4 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/opt_in_channels/useShowChannelOptInNotice.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useShowChannelOptInNotice
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 3;
            entity = tango[entity];
            tango = undefined;
            options = oscar.bind(tango)(entity);
            golf = options.useOptInEnabledForGuild;
            oscar = null;
            verify = oscar == zulu;
            entity = undefined;
            if(verify) { _fun00002_ip = 61; continue _fun00001 }
 51:
            verify = zulu.getGuildId;
            entity = verify.bind(zulu)();
 61:
            if(!(oscar == entity)) { _fun00002_ip = 71; continue _fun00001 }
 65:
            entity = _closure1_slot3;
            _fun00002_ip = 76; continue _fun00001;
 71:
            entity = zulu.guild_id;
 76:
            entity = golf.bind(options)(entity);
            options = _closure1_slot0;
            verify = _closure1_slot1;
            golf = 4;
            golf = verify[golf];
            yankee = options.bind(tango)(golf);
            offset = yankee.useStateFromStores;
            romeo = _closure1_slot2;
            golf = new Array(1);
            golf[0] = romeo;
            mike = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00004_ip = 38; continue _fun00003 }
 16:
                    tango = _closure1_slot2;
                    zulu = tango.isChannelRecordOrParentOptedIn;
                    mike = _closure2_slot0;
                    entity = zulu.bind(tango)(mike);
 38:
                    return entity;
                }
            };
            mike = offset.bind(yankee)(golf, mike);
            golf = 5;
            golf = verify[golf];
            options = options.bind(tango)(golf);
            golf = options.useCanSeeOnboardingHome;
            verify = oscar == zulu;
            tango = undefined;
            if(verify) { _fun00002_ip = 163; continue _fun00001 }
 158:
            tango = zulu.guild_id;
 163:
            if(!(oscar == tango)) { _fun00002_ip = 171; continue _fun00001 }
 167:
            tango = _closure1_slot3;
 171:
            tango = golf.bind(options)(tango);
            if(!(oscar != zulu)) { _fun00002_ip = 234; continue _fun00001 }
 180:
            if(!tango) { _fun00002_ip = 204; continue _fun00001 }
 183:
            oscar = zulu.hasFlag;
            report = _closure1_slot4;
            report = report.IS_GUILD_RESOURCE_CHANNEL;
            tango = oscar.bind(zulu)(report);
 204:
            if(!entity) { _fun00002_ip = 210; continue _fun00001 }
 207:
            entity = !tango;
 210:
            if(!entity) { _fun00002_ip = 216; continue _fun00001 }
 213:
            entity = !mike;
 216:
            if(!entity) { _fun00002_ip = 232; continue _fun00001 }
 219:
            mike = zulu.isThread;
            mike = mike.bind(zulu)();
            entity = !mike;
 232:
            return entity;
 234:
            entity = false;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();