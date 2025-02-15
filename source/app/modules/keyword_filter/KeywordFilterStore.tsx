// app/modules/keyword_filter/KeywordFilterStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: initializeKeywordTrie
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 8;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.getKeywordFilterSetting;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun00006_ip = 44; continue _fun00005 }
 38:
            tango = new Array(0);
            _fun00006_ip = 130; continue _fun00005;
 44:
            golf = _closure1_slot0;
            options = _closure1_slot1;
            report = 9;
            zulu = options[report];
            zulu = golf.bind(entity)(zulu);
            yankee = zulu.PROFANITY_KEYWORD_LIST;
            zulu = new Array(0);
            offset = 0;
            romeo = zulu;
            offset = arraySpread(romeo, yankee, offset);
            oscar = options[report];
            oscar = golf.bind(entity)(oscar);
            yankee = oscar.SLURS_KEYWORD_LIST;
            romeo = zulu;
            offset = arraySpread(romeo, yankee, offset);
            report = options[report];
            report = golf.bind(entity)(report);
            yankee = report.SEXUAL_CONTENT_KEYWORD_LIST;
            romeo = zulu;
            report = arraySpread(romeo, yankee, offset);
            tango = zulu;
 130:
            report = _closure1_slot7;
            zulu = report.getCurrentUser;
            report = zulu.bind(report)();
            zulu = null;
            if(!(zulu != report)) { _fun00006_ip = 219; continue _fun00005 }
 149:
            zulu = report.isStaff;
            zulu = zulu.bind(report)();
            if(!zulu) { _fun00006_ip = 219; continue _fun00005 }
 162:
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            zulu = 9;
            zulu = oscar[zulu];
            zulu = report.bind(entity)(zulu);
            yankee = zulu.STAFF_ONLY_KEYWORDS;
            report = tango.push;
            zulu = new Array(0);
            offset = 0;
            romeo = zulu;
            oscar = arraySpread(romeo, yankee, offset);
            romeo = report;
            yankee = zulu;
            offset = tango;
            zulu = apply(romeo, yankee, offset);
 219:
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            zulu = 10;
            zulu = oscar[zulu];
            zulu = report.bind(entity)(zulu);
            zulu = zulu.Trie;
            report = zulu.prototype;
            report = Object.create(report, {constructor: {value: zulu}});
            foxtrot = report;
            zulu = new foxtrot[zulu](romeo);
            zulu = zulu instanceof Object ? zulu : report;
            _closure1_slot9 = zulu;
            mike = zulu.addWords;
            mike = mike.bind(zulu)(tango);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: handleConnectionOpen
        mike = _closure1_slot12;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: handleOverlayInitialize
        mike = _closure1_slot12;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: handleSettingsUpdate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            mike = entity.local;
            entity = entity.settings;
            if(!mike) { _fun00008_ip = 76; continue _fun00007 }
 18:
            zulu = entity.type;
            mike = _closure1_slot8;
            mike = mike.PRELOADED_USER_SETTINGS;
            if(!(zulu === mike)) { _fun00008_ip = 76; continue _fun00007 }
 40:
            zulu = _closure1_slot9;
            mike = null;
            if(!(mike != zulu)) { _fun00008_ip = 64; continue _fun00007 }
 50:
            zulu = _closure1_slot9;
            mike = zulu.clear;
            mike = mike.bind(zulu)();
 64:
            mike = _closure1_slot12;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
 76:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot15 = entity;
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
    tango = verify.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = verify.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 3;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 4;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 5;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    options = 6;
    options = oscar[options];
    options = verify.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 7;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.UserSettingsTypes;
    var _closure1_slot8 = options;
    options = null;
    var _closure1_slot9 = options;
    mike = function(argFoo) {
        tango = function() { // Original name: KeywordFilterStore
            oscar = this;
            zulu = _closure1_slot2;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot10;
            golf = {};
            options = _closure1_slot13;
            golf['CONNECTION_OPEN'] = options;
            golf['CONNECTION_OPEN_SUPPLEMENTAL'] = options;
            options = function() { // Original name: CACHE_LOADED
                mike = _closure3_slot0;
                entity = mike.loadCache;
                entity = entity.bind(mike)();
                return entity;
            };
            golf['CACHE_LOADED'] = options;
            options = _closure1_slot14;
            golf['OVERLAY_INITIALIZE'] = options;
            entity = _closure1_slot15;
            golf['USER_SETTINGS_PROTO_UPDATE'] = entity;
            entity = new Array(1);
            entity[0] = golf;
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'loadCache';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = this;
                mike = zulu.readSnapshot;
                entity = _closure2_slot0;
                entity = entity.LATEST_SNAPSHOT_VERSION;
                entity = mike.bind(zulu)(entity);
                mike = null;
                if(!(mike != entity)) { _fun00010_ip = 105; continue _fun00009 }
 33:
                zulu = entity.keywordTrie;
                zulu = mike != zulu;
                mike = null;
                if(!zulu) { _fun00010_ip = 98; continue _fun00009 }
 48:
                report = _closure1_slot0;
                tango = _closure1_slot1;
                zulu = 10;
                tango = tango[zulu];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                tango = zulu.Trie;
                zulu = tango.fromSnapshot;
                entity = entity.keywordTrie;
                mike = zulu.bind(tango)(entity);
 98:
                _closure1_slot9 = mike;
 105:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'takeSnapshot';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = {};
            mike = _closure2_slot0;
            mike = mike.LATEST_SNAPSHOT_VERSION;
            entity['version'] = mike;
            mike = {};
            zulu = _closure1_slot9;
            mike['keywordTrie'] = zulu;
            entity['data'] = mike;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getKeywordTrie';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot9;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'initializeForKeywordTests';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tango = arguments[0];
                entity = undefined;
                if(!(tango === entity)) { _fun00012_ip = 13; continue _fun00011 }
 9:
                tango = new Array(0);
 13:
                if(!(tango === entity)) { _fun00012_ip = 21; continue _fun00011 }
 17:
                tango = new Array(0);
 21:
                report = _closure1_slot9;
                zulu = null;
                if(!(zulu == report)) { _fun00012_ip = 84; continue _fun00011 }
 34:
                report = _closure1_slot0;
                oscar = _closure1_slot1;
                zulu = 10;
                zulu = oscar[zulu];
                zulu = report.bind(entity)(zulu);
                zulu = zulu.Trie;
                report = zulu.prototype;
                report = Object.create(report, {constructor: {value: zulu}});
                options = report;
                zulu = new options[zulu](golf);
                zulu = zulu instanceof Object ? zulu : report;
                _closure1_slot9 = zulu;
 84:
                zulu = _closure1_slot9;
                mike = zulu.addWords;
                mike = mike.bind(zulu)(tango);
                return entity;
            }
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(golf);
    golf = 'KeywordFilterStore';
    mike['displayName'] = golf;
    mike['LATEST_SNAPSHOT_VERSION'] = tango;
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/keyword_filter/KeywordFilterStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();