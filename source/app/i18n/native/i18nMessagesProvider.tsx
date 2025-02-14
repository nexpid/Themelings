// app/i18n/native/i18nMessagesProvider.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun127868: for(var _fun127868_ip = 0; ; ) switch(_fun127868_ip) {
 0:
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
        tango = tango.NativeModules;
        golf = 1;
        golf = oscar[golf];
        options = report.bind(entity)(golf);
        golf = options.isAndroid;
        golf = golf.bind(options)();
        if(golf) { _fun127868_ip = 104; continue _fun127868 }
 94:
        tango = tango.i18nManager;
        _fun127868_ip = 119; continue _fun127868;
 104:
        golf = 2;
        options = oscar[golf];
        golf = argBaz;
        tango = golf.bind(entity)(options);
 119:
        var _closure1_slot2 = tango;
        tango = 5;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'i18n/native/i18nMessagesProvider.tsx';
        tango = report.bind(oscar)(tango);
        mike = function() { // Original name: newIntlMessagesProvider
            entity = global;
            zulu = entity.Promise;
            entity = zulu.prototype;
            mike = Object.create(entity, {constructor: {value: zulu}});
            tango = function(argFoo) {
                mike = argFoo;
                var _closure3_slot0 = mike;
                zulu = _closure1_slot2;
                mike = zulu.keysRequest;
                entity = function(argFoo) {
                    zulu = argFoo;
                    mike = zulu.map;
                    entity = function(argFoo) {
                        _fun127872: for(var _fun127872_ip = 0; ; ) switch(_fun127872_ip) {
 0:
                            tango = _closure1_slot0;
                            entity = _closure1_slot1;
                            zulu = 3;
                            zulu = entity[zulu];
                            report = undefined;
                            golf = tango.bind(report)(zulu);
                            oscar = golf.runtimeHashMessageKey;
                            zulu = argFoo;
                            zulu = oscar.bind(golf)(zulu);
                            oscar = 4;
                            entity = entity[oscar];
                            entity = tango.bind(report)(entity);
                            entity = entity.t;
                            tango = entity[zulu];
                            entity = null;
                            zulu = entity == tango;
                            entity = '';
                            if(zulu) { _fun127872_ip = 106; continue _fun127872 }
 73:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot1;
                            mike = mike[oscar];
                            mike = zulu.bind(report)(mike);
                            zulu = mike.intl;
                            mike = zulu.reserialize;
                            entity = mike.bind(zulu)(tango);
 106:
                            return entity;
                        }
                    };
                    zulu = mike.bind(zulu)(entity);
                    mike = _closure1_slot2;
                    entity = mike.valuesResult;
                    entity = entity.bind(mike)(zulu);
                    zulu = _closure3_slot0;
                    entity = undefined;
                    mike = true;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            report = mike;
            entity = new report[zulu](tango, zulu);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        };
        zulu['default'] = mike;
        return entity;
    }
})();