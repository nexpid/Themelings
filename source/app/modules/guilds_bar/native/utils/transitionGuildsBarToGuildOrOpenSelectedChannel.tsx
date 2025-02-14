// app/modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx
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
    entity = 4;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: transitionGuildsBarToGuildOrOpenSelectedChannel
        _fun114442: for(var _fun114442_ip = 0; ; ) switch(_fun114442_ip) {
 0:
            oscar = argFoo;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 0;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.getRootNavigationRef;
            verify = zulu.bind(tango)();
            zulu = null;
            tango = zulu == verify;
            golf = undefined;
            if(tango) { _fun114442_ip = 58; continue _fun114442 }
 48:
            tango = verify.isReady;
            golf = tango.bind(verify)();
 58:
            report = true;
            tango = undefined;
            if(!(report === golf)) { _fun114442_ip = 165; continue _fun114442 }
 66:
            golf = _closure1_slot0;
            options = _closure1_slot1;
            report = 1;
            report = options[report];
            options = golf.bind(entity)(report);
            golf = options.coerceGuildsRoute;
            report = verify.getCurrentRoute;
            report = report.bind(verify)();
            report = golf.bind(options)(report);
            golf = zulu != report;
            tango = undefined;
            if(!golf) { _fun114442_ip = 165; continue _fun114442 }
 116:
            options = report.params;
            verify = zulu == options;
            golf = undefined;
            if(verify) { _fun114442_ip = 136; continue _fun114442 }
 131:
            golf = options.guildId;
 136:
            tango = undefined;
            if(!(golf === oscar)) { _fun114442_ip = 165; continue _fun114442 }
 142:
            golf = report.params;
            options = zulu == golf;
            report = undefined;
            if(options) { _fun114442_ip = 162; continue _fun114442 }
 157:
            report = golf.channelId;
 162:
            tango = report;
 165:
            if(!(zulu == tango)) { _fun114442_ip = 202; continue _fun114442 }
 169:
            report = _closure1_slot0;
            golf = _closure1_slot1;
            zulu = 3;
            zulu = golf[zulu];
            report = report.bind(entity)(zulu);
            zulu = report.transitionToGuild;
            zulu = zulu.bind(report)(oscar);
            _fun114442_ip = 233; continue _fun114442;
 202:
            zulu = _closure1_slot0;
            report = _closure1_slot1;
            mike = 2;
            mike = report[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.transitionToChannel;
            mike = mike.bind(zulu)(tango);
 233:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();