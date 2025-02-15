// app/lib/spellcheck/LanguageDetector.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function(argFoo, argBar) { // Original name: LanguageDetector
            zulu = argFoo;
            mike = argBar;
            tango = this;
            oscar = _closure1_slot2;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(tango, report);
            report = false;
            tango['_shouldProcess'] = report;
            tango['_processing'] = report;
            report = 5;
            tango['_minimumTimeRemaining'] = report;
            tango['_language'] = zulu;
            tango['_languageHint'] = zulu;
            tango['_onChange'] = mike;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'language';
        entity['key'] = mike;
        mike = function() { // Original name: get
            entity = this;
            entity = entity._language;
            return entity;
        };
        entity['get'] = mike;
        mike = function(argFoo) { // Original name: set
            _fun62165: for(var _fun62165_ip = 0; ; ) switch(_fun62165_ip) {
 0:
                zulu = argFoo;
                mike = this;
                entity = mike._language;
                if(!(entity !== zulu)) { _fun62165_ip = 33; continue _fun62165 }
 16:
                mike['_language'] = zulu;
                entity = mike._onChange;
                entity = entity.bind(mike)(zulu);
 33:
                entity = undefined;
                return entity;
            }
        };
        entity['set'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'languageHint';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: set
            mike = argFoo;
            entity = this;
            entity['_languageHint'] = mike;
            entity = undefined;
            return entity;
        };
        entity['set'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'process';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun62167: for(var _fun62167_ip = 0; ; ) switch(_fun62167_ip) {
 0:
                zulu = this;
                var _closure3_slot0 = zulu;
                mike = argFoo;
                var _closure3_slot1 = mike;
                mike = zulu._processing;
                if(mike) { _fun62167_ip = 53; continue _fun62167 }
 25:
                mike = true;
                zulu['_processing'] = mike;
                mike = global;
                zulu = mike.requestIdleCallback;
                mike = undefined;
                entity = function(argFoo) {
                    _fun62168: for(var _fun62168_ip = 0; ; ) switch(_fun62168_ip) {
 0:
                        zulu = argFoo;
                        var _closure4_slot0 = zulu;
                        entity = zulu.timeRemaining;
                        tango = entity.bind(zulu)();
                        zulu = _closure3_slot0;
                        zulu = zulu._minimumTimeRemaining;
                        if(!(!(tango <= zulu))) { _fun62168_ip = 126; continue _fun62168 }
 36:
                        zulu = _closure3_slot1;
                        zulu = zulu.length;
                        oscar = 256;
                        if(!(zulu > oscar)) { _fun62168_ip = 76; continue _fun62168 }
 55:
                        report = _closure3_slot1;
                        tango = report.slice;
                        zulu = 0;
                        zulu = tango.bind(report)(zulu, oscar);
                        _closure3_slot1 = zulu;
 76:
                        oscar = _closure3_slot1;
                        zulu = _closure3_slot0;
                        report = zulu._languageHint;
                        tango = function(argFoo, argBar) { // Original name: detectLanguage
                            mike = argFoo;
                            var _closure5_slot0 = mike;
                            mike = argBar;
                            var _closure5_slot1 = mike;
                            tango = _closure1_slot0;
                            zulu = _closure1_slot1;
                            mike = 2;
                            zulu = zulu[mike];
                            mike = undefined;
                            tango = tango.bind(mike)(zulu);
                            zulu = tango.ensureModule;
                            mike = 'discord_spellcheck';
                            zulu = zulu.bind(tango)(mike);
                            mike = zulu.then;
                            entity = function() {
                                tango = _closure1_slot0;
                                zulu = _closure1_slot1;
                                mike = 2;
                                zulu = zulu[mike];
                                mike = undefined;
                                tango = tango.bind(mike)(zulu);
                                zulu = tango.requireModule;
                                mike = 'discord_spellcheck';
                                mike = zulu.bind(tango)(mike);
                                mike = mike.cld;
                                var _closure6_slot0 = mike;
                                mike = global;
                                zulu = mike.Promise;
                                mike = zulu.prototype;
                                mike = Object.create(mike, {constructor: {value: zulu}});
                                report = function(argFoo, argBar) {
                                    mike = argFoo;
                                    var _closure7_slot0 = mike;
                                    mike = argBar;
                                    var _closure7_slot1 = mike;
                                    report = _closure6_slot0;
                                    tango = report.detect;
                                    zulu = _closure5_slot0;
                                    mike = {};
                                    oscar = _closure5_slot1;
                                    mike['httpHint'] = oscar;
                                    oscar = 'UTF8';
                                    mike['encodingHint'] = oscar;
                                    entity = function(argFoo, argBar) {
                                        _fun62172: for(var _fun62172_ip = 0; ; ) switch(_fun62172_ip) {
 0:
                                            entity = argFoo;
                                            mike = argBar;
                                            zulu = null;
                                            if(!(zulu == entity)) { _fun62172_ip = 158; continue _fun62172 }
 15:
                                            zulu = mike.reliable;
                                            if(!zulu) { _fun62172_ip = 108; continue _fun62172 }
 26:
                                            tango = mike.languages;
                                            zulu = 0;
                                            tango = tango[zulu];
                                            report = tango.percent;
                                            tango = 90;
                                            if(!(!(report < tango))) { _fun62172_ip = 108; continue _fun62172 }
 51:
                                            tango = mike.languages;
                                            tango = tango[zulu];
                                            report = tango.score;
                                            tango = 500;
                                            if(!(!(report < tango))) { _fun62172_ip = 108; continue _fun62172 }
 77:
                                            tango = _closure7_slot0;
                                            mike = mike.languages;
                                            mike = mike[zulu];
                                            zulu = mike.code;
                                            mike = undefined;
                                            mike = tango.bind(mike)(zulu);
                                            _fun62172_ip = 205; continue _fun62172;
 108:
                                            tango = _closure7_slot1;
                                            mike = global;
                                            report = mike.Error;
                                            mike = report.prototype;
                                            zulu = Object.create(mike, {constructor: {value: report}});
                                            oscar = 'Not enough reliable text.';
                                            golf = zulu;
                                            mike = new golf[report](oscar, report);
                                            zulu = mike instanceof Object ? mike : zulu;
                                            mike = undefined;
                                            mike = tango.bind(mike)(zulu);
                                            _fun62172_ip = 205; continue _fun62172;
 158:
                                            zulu = _closure7_slot1;
                                            mike = global;
                                            tango = mike.Error;
                                            oscar = entity.message;
                                            mike = tango.prototype;
                                            mike = Object.create(mike, {constructor: {value: tango}});
                                            golf = mike;
                                            entity = new golf[tango](oscar, report);
                                            mike = entity instanceof Object ? entity : mike;
                                            entity = undefined;
                                            entity = zulu.bind(entity)(mike);
 205:
                                            entity = undefined;
                                            return entity;
                                        }
                                    };
                                    entity = tango.bind(report)(zulu, mike, entity);
                                    entity = undefined;
                                    return entity;
                                };
                                oscar = mike;
                                entity = new oscar[zulu](report, tango);
                                entity = entity instanceof Object ? entity : mike;
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        zulu = undefined;
                        report = tango.bind(zulu)(oscar, report);
                        tango = report.then;
                        zulu = function(argFoo) {
                            zulu = _closure3_slot0;
                            entity = argFoo;
                            zulu['language'] = entity;
                            mike = zulu._processEnd;
                            entity = _closure4_slot0;
                            entity = entity.didTimeout;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        mike = function() {
                            zulu = _closure3_slot0;
                            mike = zulu._processEnd;
                            entity = _closure4_slot0;
                            entity = entity.didTimeout;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        mike = tango.bind(report)(zulu, mike);
                        _fun62168_ip = 140; continue _fun62168;
 126:
                        mike = _closure3_slot0;
                        entity = mike._processEnd;
                        entity = entity.bind(mike)();
 140:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zulu.bind(mike)(entity);
 53:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = '_processEnd';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun62175: for(var _fun62175_ip = 0; ; ) switch(_fun62175_ip) {
 0:
                mike = arguments[0];
                zulu = this;
                entity = undefined;
                if(!(mike === entity)) { _fun62175_ip = 14; continue _fun62175 }
 12:
                mike = false;
 14:
                tango = false;
                zulu['_processing'] = tango;
                if(!mike) { _fun62175_ip = 40; continue _fun62175 }
 25:
                mike = zulu._minimumTimeRemaining;
                mike = mike + 1;
                zulu['_minimumTimeRemaining'] = mike;
 40:
                return entity;
            }
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 3;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'lib/spellcheck/LanguageDetector.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();