// app/i18n/native/i18nMessagesProvider.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = oscard;
        entity = global;
        option = entity.Object;
        golfie = option.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = golfie.bind(option)(zuuluu, entity, tangon);
        entity = 0;
        tangon = oscard[entity];
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        tangon = tangon.NativeModules;
        golfie = 1;
        golfie = oscard[golfie];
        option = report.bind(entity)(golfie);
        golfie = option.isAndroid;
        golfie = golfie.bind(option)();
        if(golfie) { _fun00002_ip = 104; continue _fun00001 }
 94:
        tangon = tangon.i18nManager;
        _fun00002_ip = 119; continue _fun00001;
 104:
        golfie = 2;
        option = oscard[golfie];
        golfie = argBaz;
        tangon = golfie.bind(entity)(option);
 119:
        var _closure1_slot2 = tangon;
        tangon = 5;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'i18n/native/i18nMessagesProvider.tsx';
        tangon = report.bind(oscard)(tangon);
        michal = function() { // Original name: newIntlMessagesProvider
            entity = global;
            zuuluu = entity.Promise;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            tangon = function(argFoo) {
                michal = argFoo;
                var _closure3_slot0 = michal;
                zuuluu = _closure1_slot2;
                michal = zuuluu.keysRequest;
                entity = function(argFoo) {
                    zuuluu = argFoo;
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            tangon = _closure1_slot0;
                            entity = _closure1_slot1;
                            zuuluu = 3;
                            zuuluu = entity[zuuluu];
                            report = undefined;
                            golfie = tangon.bind(report)(zuuluu);
                            oscard = golfie.runtimeHashMessageKey;
                            zuuluu = argFoo;
                            zuuluu = oscard.bind(golfie)(zuuluu);
                            oscard = 4;
                            entity = entity[oscard];
                            entity = tangon.bind(report)(entity);
                            entity = entity.t;
                            tangon = entity[zuuluu];
                            entity = null;
                            zuuluu = entity == tangon;
                            entity = '';
                            if(zuuluu) { _fun00004_ip = 106; continue _fun00003 }
 73:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot1;
                            michal = michal[oscard];
                            michal = zuuluu.bind(report)(michal);
                            zuuluu = michal.intl;
                            michal = zuuluu.reserialize;
                            entity = michal.bind(zuuluu)(tangon);
 106:
                            return entity;
                        }
                    };
                    zuuluu = michal.bind(zuuluu)(entity);
                    michal = _closure1_slot2;
                    entity = michal.valuesResult;
                    entity = entity.bind(michal)(zuuluu);
                    zuuluu = _closure3_slot0;
                    entity = undefined;
                    michal = true;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        zuuluu['default'] = michal;
        return entity;
    }
})();