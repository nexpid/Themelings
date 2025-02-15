// app/modules/guild_onboarding/GuildOnboardingPromptsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot21;
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
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
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
            _closure1_slot21 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: convertPromptsToTracked
        zulu = argFoo;
        mike = argBar;
        var _closure2_slot0 = mike;
        mike = argBaz;
        var _closure2_slot1 = mike;
        mike = zulu.map;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = argFoo;
                tango = _closure2_slot0;
                yankee = _closure2_slot1;
                golf = new Array(0);
                entity = mike.options;
                entity = entity.length;
                offset = 0;
                entity = offset < entity;
                report = false;
                verify = 'isUnseen';
                zulu = null;
                oscar = false;
                if(!entity) { _fun00006_ip = 121; continue _fun00005 }
 47:
                entity = mike.options;
                backup = entity[offset];
                entity = backup.id;
                entity = yankee[entity];
                foxtrot = zulu == entity;
                if(!foxtrot) { _fun00006_ip = 74; continue _fun00005 }
 72:
                report = true;
 74:
                romeo = golf.push;
                entity = {};
                sizing = entity;
                kilo = backup;
                backup = copyDataProperties(sizing, kilo);
                entity[verify] = foxtrot;
                entity = romeo.bind(golf)(entity);
                offset = offset + 1;
                entity = mike.options;
                entity = entity.length;
                oscar = report;
                if(offset < entity) { _fun00006_ip = 47; continue _fun00005 }
 121:
                entity = {};
                sizing = entity;
                kilo = mike;
                report = copyDataProperties(sizing, kilo);
                report = 'options';
                entity[report] = golf;
                report = 'hasNewAnswers';
                entity[report] = oscar;
                mike = mike.id;
                mike = tango[mike];
                zulu = zulu == mike;
                mike = 'isNew';
                entity[mike] = zulu;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot22 = entity;
    verify = function(argFoo) { // Original name: handleUpdate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            report = entity.updates;
            options = report.onboardingPromptsSeen;
            entity = null;
            if(!(entity == options)) { _fun00008_ip = 55; continue _fun00007 }
 26:
            mike = _closure1_slot13;
            zulu = mike[tango];
            oscar = entity == zulu;
            mike = undefined;
            if(oscar) { _fun00008_ip = 52; continue _fun00007 }
 46:
            mike = zulu.onboardingPromptsSeen;
 52:
            options = mike;
 55:
            if(!(entity == options)) { _fun00008_ip = 61; continue _fun00007 }
 59:
            options = {};
 61:
            golf = report.onboardingResponsesSeen;
            if(!(entity == golf)) { _fun00008_ip = 100; continue _fun00007 }
 71:
            mike = _closure1_slot13;
            zulu = mike[tango];
            oscar = entity == zulu;
            mike = undefined;
            if(oscar) { _fun00008_ip = 97; continue _fun00007 }
 91:
            mike = zulu.onboardingResponsesSeen;
 97:
            golf = mike;
 100:
            if(!(entity == golf)) { _fun00008_ip = 106; continue _fun00007 }
 104:
            golf = {};
 106:
            oscar = _closure1_slot22;
            zulu = report.prompts;
            if(!(entity == zulu)) { _fun00008_ip = 149; continue _fun00007 }
 123:
            verify = _closure1_slot13;
            offset = verify[tango];
            yankee = entity == offset;
            verify = undefined;
            if(yankee) { _fun00008_ip = 146; continue _fun00007 }
 140:
            verify = offset.prompts;
 146:
            zulu = verify;
 149:
            if(!(entity == zulu)) { _fun00008_ip = 157; continue _fun00007 }
 153:
            zulu = new Array(0);
 157:
            entity = undefined;
            oscar = oscar.bind(entity)(zulu, options, golf);
            zulu = _closure1_slot13;
            mike = {};
            foxtrot = zulu[tango];
            backup = mike;
            golf = copyDataProperties(backup, foxtrot);
            backup = mike;
            foxtrot = report;
            report = copyDataProperties(backup, foxtrot);
            report = 'prompts';
            mike[report] = oscar;
            zulu[tango] = mike;
            return entity;
        }
    };
    entity = function(argFoo, argBar) { // Original name: mergePendingResponses
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = argFoo;
            options = argBar;
            var _closure2_slot0 = zulu;
            var _closure2_slot1 = options;
            tango = _closure1_slot14;
            report = tango[zulu];
            tango = null;
            if(!(tango != report)) { _fun00010_ip = 171; continue _fun00009 }
 36:
            golf = {};
            var _closure2_slot2 = golf;
            tango = global;
            verify = tango.Object;
            oscar = verify.keys;
            report = _closure1_slot14;
            report = report[zulu];
            verify = oscar.bind(verify)(report);
            oscar = verify.forEach;
            report = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure2_slot1;
                    mike = tango.includes;
                    mike = mike.bind(tango)(zulu);
                    if(mike) { _fun00012_ip = 57; continue _fun00011 }
 23:
                    tango = _closure1_slot14;
                    mike = _closure2_slot0;
                    mike = tango[mike];
                    mike = mike[zulu];
                    if(!mike) { _fun00012_ip = 57; continue _fun00011 }
 45:
                    tango = _closure2_slot2;
                    mike = true;
                    tango[zulu] = mike;
                    _fun00012_ip = 112; continue _fun00011;
 57:
                    tango = _closure2_slot1;
                    mike = tango.includes;
                    mike = mike.bind(tango)(zulu);
                    if(!mike) { _fun00012_ip = 99; continue _fun00011 }
 74:
                    report = _closure1_slot14;
                    tango = _closure2_slot0;
                    tango = report[tango];
                    report = tango[zulu];
                    tango = false;
                    mike = tango === report;
 99:
                    if(!mike) { _fun00012_ip = 112; continue _fun00011 }
 102:
                    mike = _closure2_slot2;
                    entity = false;
                    mike[zulu] = entity;
 112:
                    entity = undefined;
                    return entity;
                }
            };
            report = oscar.bind(verify)(report);
            report = _closure1_slot14;
            report[zulu] = golf;
            oscar = options.filter;
            report = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = argFoo;
                    entity = _closure2_slot2;
                    tango = entity[zulu];
                    entity = null;
                    entity = entity == tango;
                    if(entity) { _fun00014_ip = 37; continue _fun00013 }
 23:
                    mike = _closure2_slot2;
                    zulu = mike[zulu];
                    mike = true;
                    entity = mike === zulu;
 37:
                    return entity;
                }
            };
            report = oscar.bind(options)(report);
            var _closure2_slot3 = report;
            oscar = tango.Object;
            tango = oscar.keys;
            oscar = tango.bind(oscar)(golf);
            tango = oscar.forEach;
            mike = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zulu = argFoo;
                    mike = _closure2_slot2;
                    tango = mike[zulu];
                    mike = true;
                    mike = mike !== tango;
                    if(mike) { _fun00016_ip = 37; continue _fun00015 }
 23:
                    report = _closure2_slot1;
                    tango = report.includes;
                    mike = tango.bind(report)(zulu);
 37:
                    if(mike) { _fun00016_ip = 54; continue _fun00015 }
 40:
                    mike = _closure2_slot3;
                    entity = mike.push;
                    entity = entity.bind(mike)(zulu);
 54:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(oscar)(mike);
            mike = _closure1_slot13;
            entity = {};
            offset = mike[zulu];
            yankee = entity;
            tango = copyDataProperties(yankee, offset);
            tango = 'responses';
            entity[tango] = report;
            mike[zulu] = entity;
 171:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    options = oscar[mike];
    options = golf.bind(entity)(options);
    var _closure1_slot10 = options;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.GuildOnboardingStatus;
    var _closure1_slot11 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.GuildOnboardingMode;
    var _closure1_slot12 = mike;
    mike = {};
    var _closure1_slot13 = mike;
    mike = {};
    var _closure1_slot14 = mike;
    mike = {};
    var _closure1_slot15 = mike;
    mike = false;
    var _closure1_slot16 = mike;
    mike = new Array(0);
    var _closure1_slot17 = mike;
    mike = new Array(0);
    var _closure1_slot18 = mike;
    mike = new Array(0);
    var _closure1_slot19 = mike;
    mike = 13;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: GuildOnboardingPromptsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot20;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            report = this;
            tango = report.waitFor;
            zulu = _closure1_slot9;
            mike = _closure1_slot10;
            entity = _closure1_slot8;
            entity = tango.bind(report)(zulu, mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(16);
        entity[0] = report;
        report = {};
        golf = 'getOnboardingPromptsForOnboarding';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zulu = _closure1_slot13;
                entity = argFoo;
                tango = zulu[entity];
                zulu = null;
                report = zulu == tango;
                entity = undefined;
                if(report) { _fun00018_ip = 31; continue _fun00017 }
 25:
                entity = tango.onboardingPrompts;
 31:
                if(!(zulu == entity)) { _fun00018_ip = 39; continue _fun00017 }
 35:
                entity = _closure1_slot17;
 39:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getOnboardingPrompts';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zulu = _closure1_slot13;
                entity = argFoo;
                tango = zulu[entity];
                zulu = null;
                report = zulu == tango;
                entity = undefined;
                if(report) { _fun00020_ip = 31; continue _fun00019 }
 25:
                entity = tango.prompts;
 31:
                if(!(zulu == entity)) { _fun00020_ip = 39; continue _fun00019 }
 35:
                entity = _closure1_slot17;
 39:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getOnboardingResponses';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                golf = argFoo;
                mike = _closure1_slot8;
                entity = mike.isFullServerPreview;
                entity = entity.bind(mike)(golf);
                if(entity) { _fun00022_ip = 59; continue _fun00021 }
 24:
                entity = _closure1_slot13;
                zulu = entity[golf];
                mike = null;
                tango = mike == zulu;
                entity = undefined;
                if(tango) { _fun00022_ip = 49; continue _fun00021 }
 43:
                entity = zulu.responses;
 49:
                if(!(mike == entity)) { _fun00022_ip = 57; continue _fun00021 }
 53:
                entity = _closure1_slot18;
 57:
                _fun00022_ip = 102; continue _fun00021;
 59:
                mike = global;
                tango = mike.Array;
                zulu = tango.from;
                oscar = _closure1_slot8;
                mike = oscar.getOnboardingResponses;
                mike = mike.bind(oscar)(golf);
                oscar = null;
                if(!(oscar == mike)) { _fun00022_ip = 97; continue _fun00021 }
 93:
                mike = _closure1_slot18;
 97:
                entity = zulu.bind(tango)(mike);
 102:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getSelectedOptions';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = argFoo;
            zulu = this;
            mike = zulu.getOnboardingResponses;
            mike = mike.bind(zulu)(tango);
            var _closure3_slot0 = mike;
            mike = zulu.getOnboardingPrompts;
            tango = mike.bind(zulu)(tango);
            zulu = tango.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.options;
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.flat;
            zulu = mike.bind(zulu)();
            mike = zulu.filter;
            entity = function(argFoo) {
                zulu = _closure3_slot0;
                mike = zulu.includes;
                entity = argFoo;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getOnboardingResponsesForPrompt';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                golf = argFoo;
                oscar = this;
                entity = argBar;
                var _closure3_slot0 = entity;
                zulu = _closure1_slot13;
                zulu = zulu[golf];
                tango = null;
                if(!(tango != zulu)) { _fun00024_ip = 130; continue _fun00023 }
 32:
                options = zulu.prompts;
                report = options.find;
                zulu = function(argFoo) {
                    entity = argFoo;
                    mike = entity.id;
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    return entity;
                };
                zulu = report.bind(options)(zulu);
                if(!(tango != zulu)) { _fun00024_ip = 124; continue _fun00023 }
 57:
                options = _closure1_slot1;
                report = _closure1_slot2;
                tango = 10;
                report = report[tango];
                tango = undefined;
                report = options.bind(tango)(report);
                tango = report.intersection;
                options = zulu.options;
                zulu = options.map;
                mike = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                zulu = zulu.bind(options)(mike);
                mike = oscar.getOnboardingResponses;
                mike = mike.bind(oscar)(golf);
                mike = tango.bind(report)(zulu, mike);
                _fun00024_ip = 128; continue _fun00023;
 124:
                mike = _closure1_slot18;
 128:
                return mike;
 130:
                entity = _closure1_slot18;
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getEnabledOnboardingPrompts';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                tango = argFoo;
                entity = _closure1_slot13;
                report = entity[tango];
                mike = _closure1_slot8;
                entity = mike.isFullServerPreview;
                entity = entity.bind(mike)(tango);
                tango = null;
                if(entity) { _fun00026_ip = 62; continue _fun00025 }
 34:
                if(!(tango != report)) { _fun00026_ip = 56; continue _fun00025 }
 38:
                entity = report.enabled;
                if(!entity) { _fun00026_ip = 56; continue _fun00025 }
 46:
                entity = report.prompts;
                if(!(tango == entity)) { _fun00026_ip = 60; continue _fun00025 }
 56:
                entity = _closure1_slot17;
 60:
                _fun00026_ip = 88; continue _fun00025;
 62:
                oscar = tango == report;
                mike = undefined;
                if(oscar) { _fun00026_ip = 77; continue _fun00025 }
 71:
                mike = report.prompts;
 77:
                if(!(tango == mike)) { _fun00026_ip = 85; continue _fun00025 }
 81:
                mike = _closure1_slot17;
 85:
                entity = mike;
 88:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getDefaultChannelIds';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                zulu = _closure1_slot13;
                entity = argFoo;
                tango = zulu[entity];
                zulu = null;
                report = zulu == tango;
                entity = undefined;
                if(report) { _fun00028_ip = 31; continue _fun00027 }
 25:
                entity = tango.defaultChannelIds;
 31:
                if(!(zulu == entity)) { _fun00028_ip = 39; continue _fun00027 }
 35:
                entity = _closure1_slot19;
 39:
                return entity;
            }
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getEnabled';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                zulu = argFoo;
                tango = _closure1_slot8;
                entity = tango.isFullServerPreview;
                entity = entity.bind(tango)(zulu);
                mike = _closure1_slot13;
                zulu = mike[zulu];
                mike = null;
                if(entity) { _fun00030_ip = 60; continue _fun00029 }
 34:
                entity = mike == zulu;
                tango = undefined;
                if(entity) { _fun00030_ip = 48; continue _fun00029 }
 43:
                tango = zulu.enabled;
 48:
                entity = mike != tango;
                if(!entity) { _fun00030_ip = 58; continue _fun00029 }
 55:
                entity = tango;
 58:
                _fun00030_ip = 64; continue _fun00029;
 60:
                entity = mike != zulu;
 64:
                return entity;
            }
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'getOnboardingPrompt';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = global;
            tango = mike.Object;
            zulu = tango.values;
            mike = _closure1_slot13;
            tango = zulu.bind(tango)(mike);
            zulu = tango.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.prompts;
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.flat;
            zulu = mike.bind(zulu)();
            mike = zulu.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure3_slot0;
                entity = mike === entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'isLoading';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot16;
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'shouldFetchPrompts';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                zulu = arguments[1];
                tango = undefined;
                if(!(zulu === tango)) { _fun00032_ip = 44; continue _fun00031 }
 9:
                mike = _closure1_slot1;
                report = _closure1_slot2;
                entity = 11;
                entity = report[entity];
                entity = mike.bind(tango)(entity);
                entity = entity.Millis;
                zulu = entity.HOUR;
 44:
                mike = _closure1_slot16;
                if(mike) { _fun00032_ip = 101; continue _fun00031 }
 54:
                mike = _closure1_slot15;
                entity = argFoo;
                tango = mike[entity];
                entity = null;
                entity = entity == tango;
                if(entity) { _fun00032_ip = 99; continue _fun00031 }
 74:
                mike = global;
                report = mike.Date;
                mike = report.now;
                mike = mike.bind(report)();
                mike = mike - tango;
                entity = mike > zulu;
 99:
                return entity;
 101:
                entity = false;
                return entity;
            }
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'getPendingResponseOptions';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot14;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'ackIdForGuild';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = this;
            zulu = tango.getEnabledOnboardingPrompts;
            mike = argFoo;
            tango = zulu.bind(tango)(mike);
            mike = '0';
            var _closure3_slot0 = mike;
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    mike = argFoo;
                    tango = mike.options;
                    zulu = tango.forEach;
                    entity = function(argFoo) {
                        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                            mike = argFoo;
                            tango = _closure1_slot1;
                            zulu = _closure1_slot2;
                            entity = 12;
                            zulu = zulu[entity];
                            entity = undefined;
                            golf = tango.bind(entity)(zulu);
                            oscar = golf.compare;
                            report = mike.id;
                            tango = _closure3_slot0;
                            report = oscar.bind(golf)(report, tango);
                            tango = 0;
                            if(!(report > tango)) { _fun00036_ip = 67; continue _fun00035 }
 58:
                            mike = mike.id;
                            _closure3_slot0 = mike;
 67:
                            return entity;
                        }
                    };
                    entity = zulu.bind(tango)(entity);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 12;
                    zulu = zulu[entity];
                    entity = undefined;
                    golf = tango.bind(entity)(zulu);
                    oscar = golf.compare;
                    report = mike.id;
                    tango = _closure3_slot0;
                    report = oscar.bind(golf)(report, tango);
                    tango = 0;
                    if(!(report > tango)) { _fun00034_ip = 89; continue _fun00033 }
 80:
                    mike = mike.id;
                    _closure3_slot0 = mike;
 89:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            entity = _closure3_slot0;
            return entity;
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'lastFetchedAt';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = _closure1_slot15;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'isAdvancedMode';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                report = argFoo;
                zulu = null;
                entity = zulu != report;
                if(!entity) { _fun00038_ip = 51; continue _fun00037 }
 12:
                tango = _closure1_slot13;
                tango = tango[report];
                report = zulu == tango;
                zulu = undefined;
                if(report) { _fun00038_ip = 37; continue _fun00037 }
 32:
                zulu = tango.mode;
 37:
                mike = _closure1_slot12;
                mike = mike.ONBOARDING_ADVANCED;
                entity = zulu === mike;
 51:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[15] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'GuildOnboardingPromptsStore';
    options['displayName'] = mike;
    mike = 14;
    mike = oscar[mike];
    foxtrot = golf.bind(entity)(mike);
    mike = {};
    offset = function() { // Original name: handleConnectionOpen
        entity = false;
        _closure1_slot16 = entity;
        entity = {};
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_OPEN'] = offset;
    offset = function() { // Original name: handleStart
        entity = true;
        _closure1_slot16 = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_ONBOARDING_PROMPTS_FETCH_START'] = offset;
    offset = function(argFoo) { // Original name: handleSuccess
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            var _closure2_slot0 = tango;
            golf = entity.prompts;
            romeo = entity.defaultChannelIds;
            kilo = entity.enabled;
            report = entity.responses;
            verify = entity.onboardingPromptsSeen;
            options = entity.onboardingResponsesSeen;
            foxtrot = entity.mode;
            yankee = entity.belowRequirements;
            entity = false;
            _closure1_slot16 = entity;
            zulu = _closure1_slot10;
            entity = zulu.getOnboardingStatus;
            zulu = entity.bind(zulu)(tango);
            entity = _closure1_slot11;
            entity = entity.READY;
            zulu = zulu === entity;
            oscar = _closure1_slot22;
            entity = undefined;
            backup = oscar.bind(entity)(golf, verify, options);
            golf = _closure1_slot13;
            oscar = {};
            oscar['enabled'] = kilo;
            oscar['mode'] = foxtrot;
            oscar['belowRequirements'] = yankee;
            oscar['prompts'] = backup;
            foxtrot = backup.filter;
            yankee = function(argFoo) {
                entity = argFoo;
                entity = entity.inOnboarding;
                return entity;
            };
            yankee = foxtrot.bind(backup)(yankee);
            oscar['onboardingPrompts'] = yankee;
            yankee = romeo.filter;
            offset = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 9;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.canChannelBeDefault;
                mike = _closure2_slot0;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            offset = yankee.bind(romeo)(offset);
            oscar['defaultChannelIds'] = offset;
            offset = report;
            if(!zulu) { _fun00040_ip = 187; continue _fun00039 }
 183:
            offset = new Array(0);
 187:
            oscar['responses'] = offset;
            oscar['onboardingPromptsSeen'] = verify;
            oscar['onboardingResponsesSeen'] = options;
            golf[tango] = oscar;
            if(zulu) { _fun00040_ip = 219; continue _fun00039 }
 209:
            zulu = _closure1_slot23;
            zulu = zulu.bind(entity)(tango, report);
 219:
            zulu = _closure1_slot15;
            mike = global;
            report = mike.Date;
            mike = report.now;
            mike = mike.bind(report)();
            zulu[tango] = mike;
            return entity;
        }
    };
    mike['GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS'] = offset;
    offset = function() { // Original name: handleFailure
        entity = false;
        _closure1_slot16 = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE'] = offset;
    offset = function(argFoo) { // Original name: handleOptionSelect
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            var _closure2_slot0 = report;
            offset = entity.optionId;
            verify = entity.selected;
            golf = entity.removedOptionIds;
            mike = _closure1_slot8;
            entity = mike.isFullServerPreview;
            entity = entity.bind(mike)(report);
            mike = !entity;
            entity = !mike;
            if(!mike) { _fun00042_ip = 307; continue _fun00041 }
 62:
            mike = _closure1_slot13;
            mike = mike[report];
            oscar = null;
            mike = oscar != mike;
            if(!mike) { _fun00042_ip = 304; continue _fun00041 }
 82:
            options = oscar != golf;
            if(!options) { _fun00042_ip = 100; continue _fun00041 }
 89:
            romeo = golf.length;
            yankee = 0;
            options = romeo > yankee;
 100:
            if(!options) { _fun00042_ip = 151; continue _fun00041 }
 103:
            romeo = _closure1_slot1;
            yankee = _closure1_slot2;
            options = 10;
            yankee = yankee[options];
            options = undefined;
            romeo = romeo.bind(options)(yankee);
            yankee = romeo.pullAll;
            options = _closure1_slot13;
            options = options[report];
            options = options.responses;
            options = yankee.bind(romeo)(options, golf);
 151:
            if(verify) { _fun00042_ip = 204; continue _fun00041 }
 154:
            romeo = _closure1_slot1;
            yankee = _closure1_slot2;
            options = 10;
            yankee = yankee[options];
            options = undefined;
            romeo = romeo.bind(options)(yankee);
            yankee = romeo.pull;
            options = _closure1_slot13;
            options = options[report];
            options = options.responses;
            options = yankee.bind(romeo)(options, offset);
            _fun00042_ip = 228; continue _fun00041;
 204:
            options = _closure1_slot13;
            options = options[report];
            yankee = options.responses;
            options = yankee.push;
            options = options.bind(yankee)(offset);
 228:
            options = _closure1_slot14;
            options = options[report];
            if(!(oscar == options)) { _fun00042_ip = 250; continue _fun00041 }
 240:
            yankee = _closure1_slot14;
            options = {};
            yankee[report] = options;
 250:
            options = _closure1_slot14;
            options = options[report];
            options[offset] = verify;
            if(!(oscar != golf)) { _fun00042_ip = 281; continue _fun00041 }
 266:
            oscar = golf.forEach;
            tango = function(argFoo) {
                mike = _closure1_slot14;
                entity = _closure2_slot0;
                zulu = mike[entity];
                entity = false;
                mike = argFoo;
                zulu[mike] = entity;
                return entity;
            };
            tango = oscar.bind(golf)(tango);
 281:
            tango = _closure1_slot14;
            zulu = {};
            foxtrot = tango[report];
            backup = zulu;
            oscar = copyDataProperties(backup, foxtrot);
            tango[report] = zulu;
            mike = true;
 304:
            entity = mike;
 307:
            return entity;
        }
    };
    mike['GUILD_ONBOARDING_SELECT_OPTION'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateResponsesSuccess
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            report = entity.options;
            golf = entity.prompts_seen;
            oscar = entity.options_seen;
            zulu = _closure1_slot23;
            entity = undefined;
            zulu = zulu.bind(entity)(tango, report);
            zulu = _closure1_slot13;
            report = zulu[tango];
            zulu = null;
            if(!(zulu != report)) { _fun00044_ip = 146; continue _fun00043 }
 54:
            options = _closure1_slot22;
            zulu = report.prompts;
            verify = options.bind(entity)(zulu, golf, oscar);
            zulu = _closure1_slot13;
            mike = {};
            romeo = mike;
            yankee = report;
            report = copyDataProperties(romeo, yankee);
            report = 'prompts';
            mike[report] = verify;
            options = verify.filter;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.inOnboarding;
                return entity;
            };
            options = options.bind(verify)(report);
            report = 'onboardingPrompts';
            mike[report] = options;
            report = 'onboardingPromptsSeen';
            mike[report] = golf;
            report = 'onboardingResponsesSeen';
            mike[report] = oscar;
            zulu[tango] = mike;
            return entity;
 146:
            entity = false;
            return entity;
        }
    };
    mike['GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS'] = offset;
    mike['GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE'] = verify;
    mike['GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleUpdateDefaultChannels
        entity = argFoo;
        zulu = entity.guildId;
        report = entity.channelIds;
        mike = _closure1_slot13;
        entity = {};
        oscar = mike[zulu];
        golf = entity;
        tango = copyDataProperties(golf, oscar);
        tango = 'defaultChannelIds';
        entity[tango] = report;
        mike[zulu] = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS'] = verify;
    tango = function(argFoo) { // Original name: handleSetMode
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            mike = entity.mode;
            entity = _closure1_slot13;
            entity = entity[zulu];
            zulu = null;
            if(!(zulu != entity)) { _fun00046_ip = 36; continue _fun00045 }
 30:
            entity['mode'] = mike;
 36:
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_SETTINGS_ONBOARDING_SET_MODE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    backup = tango;
    romeo = mike;
    mike = new backup[options](foxtrot, romeo, yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding/GuildOnboardingPromptsStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();