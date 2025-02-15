// app/modules/guild_onboarding_home/getNextResourceChannel.tsx
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
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding_home/getNextResourceChannel.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: getCurrentAndNextResourceChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argBar;
            var _closure2_slot0 = mike;
            tango = _closure1_slot2;
            zulu = tango.getResourceChannels;
            mike = argFoo;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.findIndex;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.channelId;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            tango = mike.bind(zulu)(entity);
            entity = 0;
            if(!(!(tango < entity))) { _fun00002_ip = 92; continue _fun00001 }
 54:
            mike = zulu[tango];
            entity = new Array(2);
            entity[0] = mike;
            mike = 1;
            tango = tango + mike;
            mike = zulu.length;
            mike = tango % mike;
            mike = zulu[mike];
            entity[1] = mike;
            _fun00002_ip = 102; continue _fun00001;
 92:
            entity = [null, null];
 102:
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo, argBar) { // Original name: usePreviousAndNextResourceChannel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = argBar;
            var _closure2_slot1 = mike;
            oscar = _closure1_slot0;
            zulu = _closure1_slot1;
            tango = 1;
            report = zulu[tango];
            zulu = undefined;
            oscar = oscar.bind(zulu)(report);
            report = oscar.useStateFromStores;
            mike = _closure1_slot2;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                zulu = _closure1_slot2;
                mike = zulu.getResourceChannels;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = report.bind(oscar)(zulu, mike);
            mike = zulu.findIndex;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.channelId;
                entity = _closure2_slot1;
                entity = mike === entity;
                return entity;
            };
            mike = mike.bind(zulu)(entity);
            entity = 0;
            if(!(!(mike < entity))) { _fun00004_ip = 191; continue _fun00003 }
 95:
            entity = zulu.length;
            if(!(!(entity <= tango))) { _fun00004_ip = 191; continue _fun00003 }
 104:
            report = zulu.length;
            entity = 2;
            if(!(entity !== report)) { _fun00004_ip = 164; continue _fun00003 }
 116:
            report = mike - tango;
            entity = zulu.length;
            entity = report % entity;
            report = zulu[entity];
            entity = new Array(2);
            entity[0] = report;
            oscar = mike + tango;
            report = zulu.length;
            report = oscar % report;
            report = zulu[report];
            entity[1] = report;
            _fun00004_ip = 189; continue _fun00003;
 164:
            mike = tango - mike;
            zulu = zulu[mike];
            mike = [null];
            mike[1] = zulu;
            entity = mike;
 189:
            _fun00004_ip = 201; continue _fun00003;
 191:
            entity = [null, null];
 201:
            return entity;
        }
    };
    zulu['usePreviousAndNextResourceChannel'] = mike;
    return entity;
})();