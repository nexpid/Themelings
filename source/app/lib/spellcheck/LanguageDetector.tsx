// app/lib/spellcheck/LanguageDetector.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function(argFoo, argBar) { // Original name: LanguageDetector
            zuuluu = argFoo;
            michal = argBar;
            tangon = this;
            oscard = _closure1_slot2;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(tangon, report);
            report = false;
            tangon['_shouldProcess'] = report;
            tangon['_processing'] = report;
            report = 5;
            tangon['_minimumTimeRemaining'] = report;
            tangon['_language'] = zuuluu;
            tangon['_languageHint'] = zuuluu;
            tangon['_onChange'] = michal;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'language';
        entity['key'] = michal;
        michal = function() { // Original name: get
            entity = this;
            entity = entity._language;
            return entity;
        };
        entity['get'] = michal;
        michal = function(argFoo) { // Original name: set
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                entity = michal._language;
                if(!(entity !== zuuluu)) { _fun00002_ip = 33; continue _fun00001 }
 16:
                michal['_language'] = zuuluu;
                entity = michal._onChange;
                entity = entity.bind(michal)(zuuluu);
 33:
                entity = undefined;
                return entity;
            }
        };
        entity['set'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'languageHint';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: set
            michal = argFoo;
            entity = this;
            entity['_languageHint'] = michal;
            entity = undefined;
            return entity;
        };
        entity['set'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'process';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                michal = argFoo;
                var _closure3_slot1 = michal;
                michal = zuuluu._processing;
                if(michal) { _fun00004_ip = 53; continue _fun00003 }
 25:
                michal = true;
                zuuluu['_processing'] = michal;
                michal = global;
                zuuluu = michal.requestIdleCallback;
                michal = undefined;
                entity = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = argFoo;
                        var _closure4_slot0 = zuuluu;
                        entity = zuuluu.timeRemaining;
                        tangon = entity.bind(zuuluu)();
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu._minimumTimeRemaining;
                        if(!(!(tangon <= zuuluu))) { _fun00006_ip = 126; continue _fun00005 }
 36:
                        zuuluu = _closure3_slot1;
                        zuuluu = zuuluu.length;
                        oscard = 256;
                        if(!(zuuluu > oscard)) { _fun00006_ip = 76; continue _fun00005 }
 55:
                        report = _closure3_slot1;
                        tangon = report.slice;
                        zuuluu = 0;
                        zuuluu = tangon.bind(report)(zuuluu, oscard);
                        _closure3_slot1 = zuuluu;
 76:
                        oscard = _closure3_slot1;
                        zuuluu = _closure3_slot0;
                        report = zuuluu._languageHint;
                        tangon = function(argFoo, argBar) { // Original name: detectLanguage
                            michal = argFoo;
                            var _closure5_slot0 = michal;
                            michal = argBar;
                            var _closure5_slot1 = michal;
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot1;
                            michal = 2;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            tangon = tangon.bind(michal)(zuuluu);
                            zuuluu = tangon.ensureModule;
                            michal = 'discord_spellcheck';
                            zuuluu = zuuluu.bind(tangon)(michal);
                            michal = zuuluu.then;
                            entity = function() {
                                tangon = _closure1_slot0;
                                zuuluu = _closure1_slot1;
                                michal = 2;
                                zuuluu = zuuluu[michal];
                                michal = undefined;
                                tangon = tangon.bind(michal)(zuuluu);
                                zuuluu = tangon.requireModule;
                                michal = 'discord_spellcheck';
                                michal = zuuluu.bind(tangon)(michal);
                                michal = michal.cld;
                                var _closure6_slot0 = michal;
                                michal = global;
                                zuuluu = michal.Promise;
                                michal = zuuluu.prototype;
                                michal = Object.create(michal, {constructor: {value: zuuluu}});
                                report = function(argFoo, argBar) {
                                    michal = argFoo;
                                    var _closure7_slot0 = michal;
                                    michal = argBar;
                                    var _closure7_slot1 = michal;
                                    report = _closure6_slot0;
                                    tangon = report.detect;
                                    zuuluu = _closure5_slot0;
                                    michal = {};
                                    oscard = _closure5_slot1;
                                    michal['httpHint'] = oscard;
                                    oscard = 'UTF8';
                                    michal['encodingHint'] = oscard;
                                    entity = function(argFoo, argBar) {
                                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                            entity = argFoo;
                                            michal = argBar;
                                            zuuluu = null;
                                            if(!(zuuluu == entity)) { _fun00008_ip = 158; continue _fun00007 }
 15:
                                            zuuluu = michal.reliable;
                                            if(!zuuluu) { _fun00008_ip = 108; continue _fun00007 }
 26:
                                            tangon = michal.languages;
                                            zuuluu = 0;
                                            tangon = tangon[zuuluu];
                                            report = tangon.percent;
                                            tangon = 90;
                                            if(!(!(report < tangon))) { _fun00008_ip = 108; continue _fun00007 }
 51:
                                            tangon = michal.languages;
                                            tangon = tangon[zuuluu];
                                            report = tangon.score;
                                            tangon = 500;
                                            if(!(!(report < tangon))) { _fun00008_ip = 108; continue _fun00007 }
 77:
                                            tangon = _closure7_slot0;
                                            michal = michal.languages;
                                            michal = michal[zuuluu];
                                            zuuluu = michal.code;
                                            michal = undefined;
                                            michal = tangon.bind(michal)(zuuluu);
                                            _fun00008_ip = 205; continue _fun00007;
 108:
                                            tangon = _closure7_slot1;
                                            michal = global;
                                            report = michal.Error;
                                            michal = report.prototype;
                                            zuuluu = Object.create(michal, {constructor: {value: report}});
                                            oscard = 'Not enough reliable text.';
                                            golfie = zuuluu;
                                            michal = new golfie[report](oscard, report);
                                            zuuluu = michal instanceof Object ? michal : zuuluu;
                                            michal = undefined;
                                            michal = tangon.bind(michal)(zuuluu);
                                            _fun00008_ip = 205; continue _fun00007;
 158:
                                            zuuluu = _closure7_slot1;
                                            michal = global;
                                            tangon = michal.Error;
                                            oscard = entity.message;
                                            michal = tangon.prototype;
                                            michal = Object.create(michal, {constructor: {value: tangon}});
                                            golfie = michal;
                                            entity = new golfie[tangon](oscard, report);
                                            michal = entity instanceof Object ? entity : michal;
                                            entity = undefined;
                                            entity = zuuluu.bind(entity)(michal);
 205:
                                            entity = undefined;
                                            return entity;
                                        }
                                    };
                                    entity = tangon.bind(report)(zuuluu, michal, entity);
                                    entity = undefined;
                                    return entity;
                                };
                                oscard = michal;
                                entity = new oscard[zuuluu](report, tangon);
                                entity = entity instanceof Object ? entity : michal;
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        zuuluu = undefined;
                        report = tangon.bind(zuuluu)(oscard, report);
                        tangon = report.then;
                        zuuluu = function(argFoo) {
                            zuuluu = _closure3_slot0;
                            entity = argFoo;
                            zuuluu['language'] = entity;
                            michal = zuuluu._processEnd;
                            entity = _closure4_slot0;
                            entity = entity.didTimeout;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        michal = function() {
                            zuuluu = _closure3_slot0;
                            michal = zuuluu._processEnd;
                            entity = _closure4_slot0;
                            entity = entity.didTimeout;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        michal = tangon.bind(report)(zuuluu, michal);
                        _fun00006_ip = 140; continue _fun00005;
 126:
                        michal = _closure3_slot0;
                        entity = michal._processEnd;
                        entity = entity.bind(michal)();
 140:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zuuluu.bind(michal)(entity);
 53:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = '_processEnd';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = arguments[0];
                zuuluu = this;
                entity = undefined;
                if(!(michal === entity)) { _fun00010_ip = 14; continue _fun00009 }
 12:
                michal = false;
 14:
                tangon = false;
                zuuluu['_processing'] = tangon;
                if(!michal) { _fun00010_ip = 40; continue _fun00009 }
 25:
                michal = zuuluu._minimumTimeRemaining;
                michal = michal + 1;
                zuuluu['_minimumTimeRemaining'] = michal;
 40:
                return entity;
            }
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 3;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/spellcheck/LanguageDetector.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();