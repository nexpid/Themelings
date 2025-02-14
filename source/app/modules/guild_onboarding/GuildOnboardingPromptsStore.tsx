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
        _fun61284: for(var _fun61284_ip = 0; ; ) switch(_fun61284_ip) {
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
            if(entity) { _fun61284_ip = 51; continue _fun61284 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun61284_ip = 92; continue _fun61284;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun61284_ip = 71; continue _fun61284 }
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
        _fun61285: for(var _fun61285_ip = 0; ; ) switch(_fun61285_ip) {
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
            _fun61285_ip = 74; continue _fun61285;
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
            _fun61289: for(var _fun61289_ip = 0; ; ) switch(_fun61289_ip) {
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
                if(!entity) { _fun61289_ip = 121; continue _fun61289 }
 47:
                entity = mike.options;
                backup = entity[offset];
                entity = backup.id;
                entity = yankee[entity];
                foxtrot = zulu == entity;
                if(!foxtrot) { _fun61289_ip = 74; continue _fun61289 }
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
                if(offset < entity) { _fun61289_ip = 47; continue _fun61289 }
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
        _fun61290: for(var _fun61290_ip = 0; ; ) switch(_fun61290_ip) {
 0:
            entity = argFoo;
            tango = entity.guildId;
            report = entity.updates;
            options = report.onboardingPromptsSeen;
            entity = null;
            if(!(entity == options)) { _fun61290_ip = 55; continue _fun61290 }
 26:
            mike = _closure1_slot13;
            zulu = mike[tango];
            oscar = entity == zulu;
            mike = undefined;
            if(oscar) { _fun61290_ip = 52; continue _fun61290 }
 46:
            mike = zulu.onboardingPromptsSeen;
 52:
            options = mike;
 55:
            if(!(entity == options)) { _fun61290_ip = 61; continue _fun61290 }
 59:
            options = {};
 61:
            golf = report.onboardingResponsesSeen;
            if(!(entity == golf)) { _fun61290_ip = 100; continue _fun61290 }
 71:
            mike = _closure1_slot13;
            zulu = mike[tango];
            oscar = entity == zulu;
            mike = undefined;
            if(oscar) { _fun61290_ip = 97; continue _fun61290 }
 91:
            mike = zulu.onboardingResponsesSeen;
 97:
            golf = mike;
 100:
            if(!(entity == golf)) { _fun61290_ip = 106; continue _fun61290 }
 104:
            golf = {};
 106:
            oscar = _closure1_slot22;
            zulu = report.prompts;
            if(!(entity == zulu)) { _fun61290_ip = 149; continue _fun61290 }
 123:
            verify = _closure1_slot13;
            offset = verify[tango];
            yankee = entity == offset;
            verify = undefined;
            if(yankee) { _fun61290_ip = 146; continue _fun61290 }
 140:
            verify = offset.prompts;
 146:
            zulu = verify;
 149:
            if(!(entity == zulu)) { _fun61290_ip = 157; continue _fun61290 }
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
        _fun61291: for(var _fun61291_ip = 0; ; ) switch(_fun61291_ip) {
 0:
            zulu = argFoo;
            options = argBar;
            var _closure2_slot0 = zulu;
            var _closure2_slot1 = options;
            tango = _closure1_slot14;
            report = tango[zulu];
            tango = null;
            if(!(tango != report)) { _fun61291_ip = 171; continue _fun61291 }
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
                _fun61292: for(var _fun61292_ip = 0; ; ) switch(_fun61292_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure2_slot1;
                    mike = tango.includes;
                    mike = mike.bind(tango)(zulu);
                    if(mike) { _fun61292_ip = 57; continue _fun61292 }
 23:
                    tango = _closure1_slot14;
                    mike = _closure2_slot0;
                    mike = tango[mike];
                    mike = mike[zulu];
                    if(!mike) { _fun61292_ip = 57; continue _fun61292 }
 45:
                    tango = _closure2_slot2;
                    mike = true;
                    tango[zulu] = mike;
                    _fun61292_ip = 112; continue _fun61292;
 57:
                    tango = _closure2_slot1;
                    mike = tango.includes;
                    mike = mike.bind(tango)(zulu);
                    if(!mike) { _fun61292_ip = 99; continue _fun61292 }
 74:
                    report = _closure1_slot14;
                    tango = _closure2_slot0;
                    tango = report[tango];
                    report = tango[zulu];
                    tango = false;
                    mike = tango === report;
 99:
                    if(!mike) { _fun61292_ip = 112; continue _fun61292 }
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
                _fun61293: for(var _fun61293_ip = 0; ; ) switch(_fun61293_ip) {
 0:
                    zulu = argFoo;
                    entity = _closure2_slot2;
                    tango = entity[zulu];
                    entity = null;
                    entity = entity == tango;
                    if(entity) { _fun61293_ip = 37; continue _fun61293 }
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
                _fun61294: for(var _fun61294_ip = 0; ; ) switch(_fun61294_ip) {
 0:
                    zulu = argFoo;
                    mike = _closure2_slot2;
                    tango = mike[zulu];
                    mike = true;
                    mike = mike !== tango;
                    if(mike) { _fun61294_ip = 37; continue _fun61294 }
 23:
                    report = _closure2_slot1;
                    tango = report.includes;
                    mike = tango.bind(report)(zulu);
 37:
                    if(mike) { _fun61294_ip = 54; continue _fun61294 }
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
            _fun61298: for(var _fun61298_ip = 0; ; ) switch(_fun61298_ip) {
 0:
                zulu = _closure1_slot13;
                entity = argFoo;
                tango = zulu[entity];
                zulu = null;
                report = zulu == tango;
                entity = undefined;
                if(report) { _fun61298_ip = 31; continue _fun61298 }
 25:
                entity = tango.onboardingPrompts;
 31:
                if(!(zulu == entity)) { _fun61298_ip = 39; continue _fun61298 }
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
            _fun61299: for(var _fun61299_ip = 0; ; ) switch(_fun61299_ip) {
 0:
                zulu = _closure1_slot13;
                entity = argFoo;
                tango = zulu[entity];
                zulu = null;
                report = zulu == tango;
                entity = undefined;
                if(report) { _fun61299_ip = 31; continue _fun61299 }
 25:
                entity = tango.prompts;
 31:
                if(!(zulu == entity)) { _fun61299_ip = 39; continue _fun61299 }
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
            _fun61300: for(var _fun61300_ip = 0; ; ) switch(_fun61300_ip) {
 0:
                golf = argFoo;
                mike = _closure1_slot8;
                entity = mike.isFullServerPreview;
                entity = entity.bind(mike)(golf);
                if(entity) { _fun61300_ip = 59; continue _fun61300 }
 24:
                entity = _closure1_slot13;
                zulu = entity[golf];
                mike = null;
                tango = mike == zulu;
                entity = undefined;
                if(tango) { _fun61300_ip = 49; continue _fun61300 }
 43:
                entity = zulu.responses;
 49:
                if(!(mike == entity)) { _fun61300_ip = 57; continue _fun61300 }
 53:
                entity = _closure1_slot18;
 57:
                _fun61300_ip = 102; continue _fun61300;
 59:
                mike = global;
                tango = mike.Array;
                zulu = tango.from;
                oscar = _closure1_slot8;
                mike = oscar.getOnboardingResponses;
                mike = mike.bind(oscar)(golf);
                oscar = null;
                if(!(oscar == mike)) { _fun61300_ip = 97; continue _fun61300 }
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
            _fun61304: for(var _fun61304_ip = 0; ; ) switch(_fun61304_ip) {
 0:
                golf = argFoo;
                oscar = this;
                entity = argBar;
                var _closure3_slot0 = entity;
                zulu = _closure1_slot13;
                zulu = zulu[golf];
                tango = null;
                if(!(tango != zulu)) { _fun61304_ip = 130; continue _fun61304 }
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
                if(!(tango != zulu)) { _fun61304_ip = 124; continue _fun61304 }
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
                _fun61304_ip = 128; continue _fun61304;
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
            _fun61307: for(var _fun61307_ip = 0; ; ) switch(_fun61307_ip) {
 0:
                tango = argFoo;
                entity = _closure1_slot13;
                report = entity[tango];
                mike = _closure1_slot8;
                entity = mike.isFullServerPreview;
                entity = entity.bind(mike)(tango);
                tango = null;
                if(entity) { _fun61307_ip = 62; continue _fun61307 }
 34:
                if(!(tango != report)) { _fun61307_ip = 56; continue _fun61307 }
 38:
                entity = report.enabled;
                if(!entity) { _fun61307_ip = 56; continue _fun61307 }
 46:
                entity = report.prompts;
                if(!(tango == entity)) { _fun61307_ip = 60; continue _fun61307 }
 56:
                entity = _closure1_slot17;
 60:
                _fun61307_ip = 88; continue _fun61307;
 62:
                oscar = tango == report;
                mike = undefined;
                if(oscar) { _fun61307_ip = 77; continue _fun61307 }
 71:
                mike = report.prompts;
 77:
                if(!(tango == mike)) { _fun61307_ip = 85; continue _fun61307 }
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
            _fun61308: for(var _fun61308_ip = 0; ; ) switch(_fun61308_ip) {
 0:
                zulu = _closure1_slot13;
                entity = argFoo;
                tango = zulu[entity];
                zulu = null;
                report = zulu == tango;
                entity = undefined;
                if(report) { _fun61308_ip = 31; continue _fun61308 }
 25:
                entity = tango.defaultChannelIds;
 31:
                if(!(zulu == entity)) { _fun61308_ip = 39; continue _fun61308 }
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
            _fun61309: for(var _fun61309_ip = 0; ; ) switch(_fun61309_ip) {
 0:
                zulu = argFoo;
                tango = _closure1_slot8;
                entity = tango.isFullServerPreview;
                entity = entity.bind(tango)(zulu);
                mike = _closure1_slot13;
                zulu = mike[zulu];
                mike = null;
                if(entity) { _fun61309_ip = 60; continue _fun61309 }
 34:
                entity = mike == zulu;
                tango = undefined;
                if(entity) { _fun61309_ip = 48; continue _fun61309 }
 43:
                tango = zulu.enabled;
 48:
                entity = mike != tango;
                if(!entity) { _fun61309_ip = 58; continue _fun61309 }
 55:
                entity = tango;
 58:
                _fun61309_ip = 64; continue _fun61309;
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
            _fun61314: for(var _fun61314_ip = 0; ; ) switch(_fun61314_ip) {
 0:
                zulu = arguments[1];
                tango = undefined;
                if(!(zulu === tango)) { _fun61314_ip = 44; continue _fun61314 }
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
                if(mike) { _fun61314_ip = 101; continue _fun61314 }
 54:
                mike = _closure1_slot15;
                entity = argFoo;
                tango = mike[entity];
                entity = null;
                entity = entity == tango;
                if(entity) { _fun61314_ip = 99; continue _fun61314 }
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
                _fun61317: for(var _fun61317_ip = 0; ; ) switch(_fun61317_ip) {
 0:
                    mike = argFoo;
                    tango = mike.options;
                    zulu = tango.forEach;
                    entity = function(argFoo) {
                        _fun61318: for(var _fun61318_ip = 0; ; ) switch(_fun61318_ip) {
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
                            if(!(report > tango)) { _fun61318_ip = 67; continue _fun61318 }
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
                    if(!(report > tango)) { _fun61317_ip = 89; continue _fun61317 }
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
            _fun61320: for(var _fun61320_ip = 0; ; ) switch(_fun61320_ip) {
 0:
                report = argFoo;
                zulu = null;
                entity = zulu != report;
                if(!entity) { _fun61320_ip = 51; continue _fun61320 }
 12:
                tango = _closure1_slot13;
                tango = tango[report];
                report = zulu == tango;
                zulu = undefined;
                if(report) { _fun61320_ip = 37; continue _fun61320 }
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
        _fun61323: for(var _fun61323_ip = 0; ; ) switch(_fun61323_ip) {
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
            if(!zulu) { _fun61323_ip = 187; continue _fun61323 }
 183:
            offset = new Array(0);
 187:
            oscar['responses'] = offset;
            oscar['onboardingPromptsSeen'] = verify;
            oscar['onboardingResponsesSeen'] = options;
            golf[tango] = oscar;
            if(zulu) { _fun61323_ip = 219; continue _fun61323 }
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
        _fun61327: for(var _fun61327_ip = 0; ; ) switch(_fun61327_ip) {
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
            if(!mike) { _fun61327_ip = 307; continue _fun61327 }
 62:
            mike = _closure1_slot13;
            mike = mike[report];
            oscar = null;
            mike = oscar != mike;
            if(!mike) { _fun61327_ip = 304; continue _fun61327 }
 82:
            options = oscar != golf;
            if(!options) { _fun61327_ip = 100; continue _fun61327 }
 89:
            romeo = golf.length;
            yankee = 0;
            options = romeo > yankee;
 100:
            if(!options) { _fun61327_ip = 151; continue _fun61327 }
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
            if(verify) { _fun61327_ip = 204; continue _fun61327 }
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
            _fun61327_ip = 228; continue _fun61327;
 204:
            options = _closure1_slot13;
            options = options[report];
            yankee = options.responses;
            options = yankee.push;
            options = options.bind(yankee)(offset);
 228:
            options = _closure1_slot14;
            options = options[report];
            if(!(oscar == options)) { _fun61327_ip = 250; continue _fun61327 }
 240:
            yankee = _closure1_slot14;
            options = {};
            yankee[report] = options;
 250:
            options = _closure1_slot14;
            options = options[report];
            options[offset] = verify;
            if(!(oscar != golf)) { _fun61327_ip = 281; continue _fun61327 }
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
        _fun61329: for(var _fun61329_ip = 0; ; ) switch(_fun61329_ip) {
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
            if(!(zulu != report)) { _fun61329_ip = 146; continue _fun61329 }
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
        _fun61332: for(var _fun61332_ip = 0; ; ) switch(_fun61332_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            mike = entity.mode;
            entity = _closure1_slot13;
            entity = entity[zulu];
            zulu = null;
            if(!(zulu != entity)) { _fun61332_ip = 36; continue _fun61332 }
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