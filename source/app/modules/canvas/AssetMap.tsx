// app/modules/canvas/AssetMap.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function() { // Original name: _loadAssetMap
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 118; continue _fun00001 }
 9:
                    michal = undefined;
                    var _closure4_slot0 = michal;
                    michal = _closure1_slot7;
                    zuuluu = michal.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                    verify = zuuluu;
                    michal = new verify[michal](option);
                    zuuluu = michal instanceof Object ? michal : zuuluu;
                    _closure4_slot0 = zuuluu;
                    michal = global;
                    golfie = michal.Object;
                    oscard = golfie.entries;
                    report = argFoo;
                    oscard = oscard.bind(golfie)(report);
                    report = oscard.map;
                    tangon = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            oscard = argFoo;
                            michal = oscard[Symbol.iterator];
                            oscard = michal().next;
                            tangon = oscard().value;
                            zuuluu = michal;
                            option = undefined;
                            zuuluu = zuuluu === option;
                            report = undefined;
                            if(zuuluu) { _fun00004_ip = 29; continue _fun00003 }
 26:
                            report = tangon;
 29:
                            var _closure5_slot0 = report;
                            tangon = undefined;
                            if(zuuluu) { _fun00004_ip = 63; continue _fun00003 }
 38:
                            golfie = oscard().value;
                            oscard = michal;
                            oscard = oscard === option;
                            tangon = undefined;
                            zuuluu = oscard;
                            if(oscard) { _fun00004_ip = 63; continue _fun00003 }
 57:
                            tangon = golfie;
                            zuuluu = oscard;
 63:
                            var _closure5_slot1 = tangon;
                            if(zuuluu) { _fun00004_ip = 73; continue _fun00003 }
 70:
                            michal.return();
 73:
                            zuuluu = _closure4_slot0;
                            michal = zuuluu.loadRemoteImage;
                            zuuluu = michal.bind(zuuluu)(report, tangon);
                            michal = zuuluu.catch;
                            entity = function(argFoo) {
                                oscard = _closure1_slot5;
                                report = oscard.warn;
                                option = _closure5_slot0;
                                golfie = _closure5_slot1;
                                offset = 'Failed to load canvas asset';
                                verify = argFoo;
                                yankee = oscard;
                                entity = yankee[report](offset, verify, option, golfie, oscard);
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        }
                    };
                    report = report.bind(oscard)(tangon);
                    tangon = michal.Promise;
                    michal = tangon.all;
                    michal = michal.bind(tangon)(report);
                    SaveGenerator(address=106);
 104:
                    return michal;
 106:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 115; continue _fun00001 }
 112:
                    return zuuluu;
 115:
                    return michal;
 118:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = report.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = report.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    option = michal.Logger;
    michal = option.prototype;
    report = Object.create(michal, {constructor: {value: option}});
    romeon = 'AssetMap';
    foxtra = report;
    michal = new foxtra[option](romeon, yankee);
    michal = michal instanceof Object ? michal : report;
    var _closure1_slot5 = michal;
    michal = ['./fonts/ggsans-400-normal.ttf', './fonts/ggsans-700-bold.ttf', 'https://cdn.discordapp.com/assets/remix/fonts/ggsans-400-normal.ttf', 'https://cdn.discordapp.com/assets/remix/fonts/ggsans-700-bold.ttf'];
    var _closure1_slot6 = michal;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: AssetMap
            zuuluu = this;
            report = _closure1_slot2;
            tangon = _closure2_slot1;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = {};
            zuuluu['assets'] = tangon;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 4;
            michal = report[michal];
            michal = tangon.bind(entity)(michal);
            michal = michal.Skia;
            tangon = michal.TypefaceFontProvider;
            michal = tangon.Make;
            michal = michal.bind(tangon)();
            zuuluu['fontManager'] = michal;
            return entity;
        };
        var _closure2_slot1 = zuuluu;
        report = {};
        michal = 'loadFonts';
        report['key'] = michal;
        michal = function() { // Original name: value
            michal = this;
            var _closure3_slot0 = michal;
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 4;
            michal = report[michal];
            oscard = undefined;
            michal = zuuluu.bind(oscard)(michal);
            michal = michal.Skia;
            var _closure3_slot1 = michal;
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.all;
            report = _closure1_slot6;
            tangon = report.map;
            entity = function() {
                tangon = _closure1_slot4;
                zuuluu = undefined;
                michal = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00006_ip = 109; continue _fun00005 }
 7:
                            michal = _closure3_slot1;
                            tangon = michal.Data;
                            zuuluu = tangon.fromURI;
                            michal = argFoo;
                            michal = zuuluu.bind(tangon)(michal);
                            SaveGenerator(address=38);
 36:
                            return michal;
 38:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(zuuluu) { _fun00006_ip = 106; continue _fun00005 }
 44:
                            zuuluu = _closure3_slot1;
                            tangon = zuuluu.Typeface;
                            zuuluu = tangon.MakeFreeTypeFaceFromData;
                            zuuluu = zuuluu.bind(tangon)(michal);
                            tangon = null;
                            if(!(tangon != zuuluu)) { _fun00006_ip = 103; continue _fun00005 }
 71:
                            report = _closure3_slot0;
                            oscard = report.fontManager;
                            if(!(tangon != oscard)) { _fun00006_ip = 103; continue _fun00005 }
 85:
                            report = oscard.registerFont;
                            tangon = 'gg sans';
                            tangon = report.bind(oscard)(zuuluu, tangon);
 103:
                            return zuuluu;
 106:
                            return michal;
 109:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure4_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure4_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            entity = entity.bind(oscard)();
            entity = tangon.bind(report)(entity);
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = michal;
        michal = new Array(4);
        michal[0] = report;
        report = {};
        golfie = 'loadRemoteImage';
        report['key'] = golfie;
        option = _closure1_slot4;
        entity = undefined;
        golfie = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 125; continue _fun00007 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    zuuluu = michal.Skia;
                    report = zuuluu.Data;
                    tangon = report.fromURI;
                    michal = argBar;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=62);
 60:
                    return michal;
 62:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 122; continue _fun00007 }
 68:
                    tangon = zuuluu.Image;
                    zuuluu = tangon.MakeImageFromEncoded;
                    report = zuuluu.bind(tangon)(michal);
                    zuuluu = this;
                    tangon = zuuluu.assets;
                    zuuluu = argFoo;
                    tangon[zuuluu] = report;
                    zuuluu = global;
                    tangon = zuuluu.Promise;
                    zuuluu = tangon.resolve;
                    zuuluu = zuuluu.bind(tangon)();
                    return zuuluu;
 122:
                    return michal;
 125:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(entity)(golfie);
        var _closure2_slot0 = golfie;
        golfie = function() { // Original name: loadRemoteImage
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        michal[1] = report;
        report = {};
        golfie = 'get';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = this;
            michal = entity.assets;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        michal[2] = report;
        report = {};
        golfie = 'has';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            michal = entity.assets;
            entity = argFoo;
            michal = michal[entity];
            entity = null;
            entity = entity != michal;
            return entity;
        };
        report['value'] = oscard;
        michal[3] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    var _closure1_slot7 = michal;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/canvas/AssetMap.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = michal;
    tangon = function() { // Original name: loadAssetMap
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['loadAssetMap'] = tangon;
    zuuluu['AssetMap'] = michal;
    return entity;
})();