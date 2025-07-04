// app/modules/billing/native/StorekitIAPQueue.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: mapToIAPProduct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.countryCode;
            report = null;
            entity = report != entity;
            tangon = '';
            if(!entity) { _fun00002_ip = 89; continue _fun00001 }
 22:
            entity = zuuluu.countryCode;
            entity = entity.length;
            oscard = 3;
            if(!(oscard !== entity)) { _fun00002_ip = 48; continue _fun00001 }
 40:
            entity = zuuluu.countryCode;
            _fun00002_ip = 86; continue _fun00001;
 48:
            golfie = _closure1_slot0;
            michal = _closure1_slot1;
            oscard = michal[oscard];
            michal = undefined;
            michal = golfie.bind(michal)(oscard);
            oscard = michal.CountryCodesISO3to2;
            michal = zuuluu.countryCode;
            entity = oscard[michal];
 86:
            tangon = entity;
 89:
            entity = {};
            michal = zuuluu.productId;
            entity['identifier'] = michal;
            michal = global;
            golfie = michal.parseFloat;
            oscard = zuuluu.price;
            michal = undefined;
            oscard = golfie.bind(michal)(oscard);
            entity['price'] = oscard;
            option = zuuluu.localizedPrice;
            oscard = report == option;
            report = undefined;
            if(oscard) { _fun00002_ip = 173; continue _fun00001 }
 143:
            golfie = option.split;
            oscard = /[0-9]/;
            golfie = golfie.bind(option)(oscard);
            oscard = 0;
            report = golfie[oscard];
 173:
            entity['currencySymbol'] = report;
            oscard = zuuluu.currency;
            report = oscard.toLowerCase;
            report = report.bind(oscard)();
            entity['currencyCode'] = report;
            report = zuuluu.price;
            entity['priceString'] = report;
            entity['countryCode'] = tangon;
            tangon = false;
            entity['downloadable'] = tangon;
            tangon = zuuluu.description;
            entity['description'] = tangon;
            tangon = zuuluu.title;
            entity['title'] = tangon;
            tangon = 'discounts';
            tangon = tangon in zuuluu;
            michal = undefined;
            if(!tangon) { _fun00002_ip = 263; continue _fun00001 }
 257:
            michal = zuuluu.discounts;
 263:
            entity['discounts'] = michal;
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function() { // Original name: StorekitIAPQueueClass
            zuuluu = this;
            tangon = _closure1_slot3;
            michal = _closure2_slot1;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = new Array(0);
            zuuluu['_queue'] = michal;
            michal = false;
            zuuluu['_processingQueue'] = michal;
            return entity;
        };
        var _closure2_slot1 = zuuluu;
        report = {};
        michal = 'fetchSubscriptions';
        report['key'] = michal;
        michal = function(argFoo) { // Original name: value
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            michal = argFoo;
            var _closure3_slot1 = michal;
            michal = global;
            tangon = michal.Promise;
            michal = tangon.prototype;
            michal = Object.create(michal, {constructor: {value: tangon}});
            report = function(argFoo, argBar) {
                entity = argFoo;
                var _closure4_slot0 = entity;
                entity = argBar;
                var _closure4_slot1 = entity;
                entity = _closure3_slot0;
                tangon = entity._queue;
                zuuluu = tangon.push;
                report = _closure1_slot2;
                entity = undefined;
                michal = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00004_ip = 122; continue _fun00003 }
 7: // try_start_0
                            zuuluu = _closure1_slot0;
                            tangon = _closure1_slot1;
                            michal = 4;
                            michal = tangon[michal];
                            tangon = undefined;
                            report = zuuluu.bind(tangon)(michal);
                            zuuluu = report.getSubscriptions;
                            michal = {};
                            oscard = _closure3_slot1;
                            michal['skus'] = oscard;
                            report = zuuluu.bind(report)(michal);
                            zuuluu = report.then;
                            michal = function(argFoo) {
                                zuuluu = argFoo;
                                michal = zuuluu.map;
                                entity = function(argFoo) {
                                    zuuluu = _closure1_slot5;
                                    michal = undefined;
                                    entity = argFoo;
                                    entity = zuuluu.bind(michal)(entity);
                                    return entity;
                                };
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            michal = zuuluu.bind(report)(michal);
                            SaveGenerator(address=78);
 76:
                            return michal;
 78:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(zuuluu) { _fun00004_ip = 98; continue _fun00003 }
 84:
                            zuuluu = _closure4_slot0;
                            zuuluu = zuuluu.bind(tangon)(michal);
 96: // try_end0
                            _fun00004_ip = 117; continue _fun00003;
 98:
                            return michal;
 101: // catch_target0
                            CatchBlockStart(arg_register=3);
                            zuuluu = _closure4_slot1;
                            michal = undefined;
                            michal = zuuluu.bind(michal)(tangon);
 117:
                            michal = undefined;
                            return michal;
 122:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = report.bind(entity)(michal);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            oscard = michal;
            entity = new oscard[tangon](report, tangon);
            entity = entity instanceof Object ? entity : michal;
            michal = zuuluu.processQueue;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        report['value'] = michal;
        michal = new Array(3);
        michal[0] = report;
        report = {};
        golfie = 'fetchProducts';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            michal = argFoo;
            var _closure3_slot1 = michal;
            michal = global;
            tangon = michal.Promise;
            michal = tangon.prototype;
            michal = Object.create(michal, {constructor: {value: tangon}});
            report = function(argFoo, argBar) {
                entity = argFoo;
                var _closure4_slot0 = entity;
                entity = argBar;
                var _closure4_slot1 = entity;
                entity = _closure3_slot0;
                tangon = entity._queue;
                zuuluu = tangon.push;
                report = _closure1_slot2;
                entity = undefined;
                michal = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00006_ip = 122; continue _fun00005 }
 7: // try_start_0
                            zuuluu = _closure1_slot0;
                            tangon = _closure1_slot1;
                            michal = 4;
                            michal = tangon[michal];
                            tangon = undefined;
                            report = zuuluu.bind(tangon)(michal);
                            zuuluu = report.getProducts;
                            michal = {};
                            oscard = _closure3_slot1;
                            michal['skus'] = oscard;
                            report = zuuluu.bind(report)(michal);
                            zuuluu = report.then;
                            michal = function(argFoo) {
                                zuuluu = argFoo;
                                michal = zuuluu.map;
                                entity = function(argFoo) {
                                    zuuluu = _closure1_slot5;
                                    michal = undefined;
                                    entity = argFoo;
                                    entity = zuuluu.bind(michal)(entity);
                                    return entity;
                                };
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            };
                            michal = zuuluu.bind(report)(michal);
                            SaveGenerator(address=78);
 76:
                            return michal;
 78:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(zuuluu) { _fun00006_ip = 98; continue _fun00005 }
 84:
                            zuuluu = _closure4_slot0;
                            zuuluu = zuuluu.bind(tangon)(michal);
 96: // try_end0
                            _fun00006_ip = 117; continue _fun00005;
 98:
                            return michal;
 101: // catch_target0
                            CatchBlockStart(arg_register=3);
                            zuuluu = _closure4_slot1;
                            michal = undefined;
                            michal = zuuluu.bind(michal)(tangon);
 117:
                            michal = undefined;
                            return michal;
 122:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = report.bind(entity)(michal);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            oscard = michal;
            entity = new oscard[tangon](report, tangon);
            entity = entity instanceof Object ? entity : michal;
            michal = zuuluu.processQueue;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        report['value'] = golfie;
        michal[1] = report;
        report = {};
        golfie = 'processQueue';
        report['key'] = golfie;
        option = _closure1_slot2;
        entity = undefined;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    tangon = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 129; continue _fun00007 }
 10:
                    michal = tangon._processingQueue;
                    if(michal) { _fun00008_ip = 124; continue _fun00007 }
 19:
                    michal = true;
                    tangon['_processingQueue'] = michal;
 27: // try_start_0
                    michal = tangon._queue;
                    michal = michal.length;
                    oscard = 0;
                    report = undefined;
                    if(!(michal > oscard)) { _fun00008_ip = 91; continue _fun00007 }
 46:
                    zuuluu = tangon._queue;
                    michal = zuuluu.shift;
                    michal = michal.bind(zuuluu)();
                    michal = michal.bind(report)();
                    SaveGenerator(address=70);
 68:
                    return michal;
 70:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 101; continue _fun00007 }
 76:
                    zuuluu = tangon._queue;
                    zuuluu = zuuluu.length;
                    if(zuuluu > oscard) { _fun00008_ip = 46; continue _fun00007 }
 91: // try_end0
                    zuuluu = false;
                    tangon['_processingQueue'] = zuuluu;
                    _fun00008_ip = 124; continue _fun00007;
 101:
                    zuuluu = false;
                    tangon['_processingQueue'] = zuuluu;
                    return michal;
 112: // catch_target0
                    CatchBlockStart(arg_register=1);
                    zuuluu = false;
                    tangon['_processingQueue'] = zuuluu;
                    throw michal;
 124:
                    michal = undefined;
                    return michal;
 129:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(entity)(golfie);
        var _closure2_slot0 = golfie;
        oscard = function() { // Original name: processQueue
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = oscard;
        michal[2] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/billing/native/StorekitIAPQueue.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();