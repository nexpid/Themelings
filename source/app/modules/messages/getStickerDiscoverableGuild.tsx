// app/modules/messages/getStickerDiscoverableGuild.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/getStickerDiscoverableGuild.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 1;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.HTTP;
        zulu = tango.get;
        mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        golf = _closure1_slot2;
        oscar = golf.STICKER_GUILD_DATA;
        report = argFoo;
        report = oscar.bind(golf)(report);
        mike['url'] = report;
        tango = zulu.bind(tango)(mike);
        zulu = tango.then;
        mike = function(argFoo) {
            _fun90822: for(var _fun90822_ip = 0; ; ) switch(_fun90822_ip) {
 0:
                mike = argFoo;
                entity = null;
                tango = entity == mike;
                report = undefined;
                zulu = undefined;
                if(tango) { _fun90822_ip = 21; continue _fun90822 }
 16:
                zulu = mike.body;
 21:
                zulu = entity != zulu;
                entity = null;
                if(!zulu) { _fun90822_ip = 69; continue _fun90822 }
 30:
                tango = _closure1_slot0;
                oscar = _closure1_slot1;
                zulu = 2;
                zulu = oscar[zulu];
                tango = tango.bind(report)(zulu);
                zulu = tango.makeDiscoverableGuild;
                mike = mike.body;
                entity = zulu.bind(tango)(mike);
 69:
                return entity;
            }
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.catch;
        entity = function() {
            entity = null;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();