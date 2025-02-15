// app/modules/guild_settings/GuildSettingsRolesStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun126227: for(var _fun126227_ip = 0; ; ) switch(_fun126227_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot30;
            entity = entity.bind(zulu)();
            if(entity) { _fun126227_ip = 51; continue _fun126227 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun126227_ip = 92; continue _fun126227;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun126227_ip = 71; continue _fun126227 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun126228: for(var _fun126228_ip = 0; ; ) switch(_fun126228_ip) {
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
 72: // try_end0
            _fun126228_ip = 76; continue _fun126228;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot30 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: calculatePositionDeltas
        _fun126231: for(var _fun126231_ip = 0; ; ) switch(_fun126231_ip) {
 0:
            entity = _closure1_slot14;
            mike = null;
            if(!(mike != entity)) { _fun126231_ip = 198; continue _fun126231 }
 18:
            entity = _closure1_slot21;
            if(!(mike != entity)) { _fun126231_ip = 198; continue _fun126231 }
 29:
            zulu = _closure1_slot1;
            golf = _closure1_slot3;
            entity = 9;
            entity = golf[entity];
            mike = undefined;
            oscar = zulu.bind(mike)(entity);
            verify = _closure1_slot10;
            options = verify.getRoles;
            entity = _closure1_slot14;
            entity = entity.id;
            entity = options.bind(verify)(entity);
            oscar = oscar.bind(mike)(entity);
            entity = oscar.values;
            options = entity.bind(oscar)();
            oscar = options.sortBy;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.position;
                return entity;
            };
            oscar = oscar.bind(options)(entity);
            entity = oscar.reverse;
            oscar = entity.bind(oscar)();
            entity = oscar.value;
            oscar = entity.bind(oscar)();
            entity = 10;
            entity = golf[entity];
            zulu = zulu.bind(mike)(entity);
            mike = zulu.calculatePositionDeltas;
            entity = {};
            entity['oldOrdering'] = oscar;
            report = _closure1_slot21;
            entity['newOrdering'] = report;
            report = function(argFoo) { // Original name: idGetter
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            entity['idGetter'] = report;
            tango = function(argFoo) { // Original name: existingPositionGetter
                _fun126234: for(var _fun126234_ip = 0; ; ) switch(_fun126234_ip) {
 0:
                    entity = argFoo;
                    mike = entity.originalPosition;
                    entity = null;
                    zulu = entity != mike;
                    entity = inf;
                    if(!zulu) { _fun126234_ip = 31; continue _fun126234 }
 28:
                    entity = mike;
 31:
                    return entity;
                }
            };
            entity['existingPositionGetter'] = tango;
            tango = false;
            entity['ascending'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
 198:
            entity = new Array(0);
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    offset = function(argFoo) { // Original name: handleSetSection
        _fun126235: for(var _fun126235_ip = 0; ; ) switch(_fun126235_ip) {
 0:
            entity = argFoo;
            zulu = entity.section;
            tango = _closure1_slot14;
            mike = null;
            if(!(mike == tango)) { _fun126235_ip = 47; continue _fun126235 }
 21:
            mike = _closure1_slot12;
            mike = mike.ROLES;
            if(!(zulu === mike)) { _fun126235_ip = 47; continue _fun126235 }
 35:
            mike = _closure1_slot32;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
 47:
            entity = false;
            return entity;
        }
    };
    entity = function() { // Original name: handleInit
        _fun126236: for(var _fun126236_ip = 0; ; ) switch(_fun126236_ip) {
 0:
            tango = arguments[0];
            entity = undefined;
            if(!(tango === entity)) { _fun126236_ip = 13; continue _fun126236 }
 11:
            tango = true;
 13:
            oscar = _closure1_slot11;
            report = oscar.getProps;
            report = report.bind(oscar)();
            report = report.guild;
            var _closure1_slot14 = report;
            report = false;
            _closure1_slot19 = report;
            _closure1_slot20 = report;
            var _closure1_slot16 = entity;
            golf = _closure1_slot17;
            oscar = golf.clear;
            oscar = oscar.bind(golf)();
            oscar = _closure1_slot13;
            oscar = oscar.OPEN;
            _closure1_slot18 = oscar;
            golf = _closure1_slot14;
            oscar = null;
            if(!(oscar == golf)) { _fun126236_ip = 97; continue _fun126236 }
 91:
            options = new Array(0);
            _fun126236_ip = 192; continue _fun126236;
 97:
            golf = _closure1_slot1;
            verify = _closure1_slot3;
            oscar = 9;
            oscar = verify[oscar];
            golf = golf.bind(entity)(oscar);
            offset = _closure1_slot10;
            verify = offset.getRoles;
            oscar = _closure1_slot14;
            oscar = oscar.id;
            oscar = verify.bind(offset)(oscar);
            golf = golf.bind(entity)(oscar);
            oscar = golf.values;
            verify = oscar.bind(golf)();
            golf = verify.sortBy;
            oscar = function(argFoo) {
                entity = argFoo;
                entity = entity.position;
                return entity;
            };
            golf = golf.bind(verify)(oscar);
            oscar = golf.reverse;
            golf = oscar.bind(golf)();
            oscar = golf.value;
            options = oscar.bind(golf)();
 192:
            _closure1_slot21 = options;
            oscar = new Array(0);
            yankee = 0;
            foxtrot = oscar;
            romeo = options;
            golf = arraySpread(foxtrot, romeo, yankee);
            _closure1_slot22 = oscar;
            _closure1_slot23 = report;
            if(!tango) { _fun126236_ip = 258; continue _fun126236 }
 223:
            report = _closure1_slot26;
            tango = report.clear;
            tango = tango.bind(report)();
            tango = _closure1_slot25;
            zulu = tango.forEach;
            mike = function(argFoo, argBar) {
                tango = _closure1_slot26;
                zulu = tango.set;
                mike = new Array(0);
                golf = argFoo;
                oscar = 0;
                options = mike;
                entity = arraySpread(options, golf, oscar);
                entity = argBar;
                entity = zulu.bind(tango)(entity, mike);
                entity = undefined;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
 258:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo, argBar) { // Original name: updateRole
        _fun126239: for(var _fun126239_ip = 0; ; ) switch(_fun126239_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot21;
            mike = tango.indexOf;
            tango = mike.bind(tango)(zulu);
            report = 0;
            if(!(!(tango < report))) { _fun126239_ip = 114; continue _fun126239 }
 26:
            mike = {};
            options = mike;
            golf = zulu;
            zulu = copyDataProperties(options, golf);
            golf = argBar;
            options = mike;
            zulu = copyDataProperties(options, golf);
            zulu = _closure1_slot21;
            zulu[tango] = mike;
            golf = _closure1_slot21;
            zulu = new Array(0);
            options = zulu;
            oscar = 0;
            tango = arraySpread(options, golf, oscar);
            _closure1_slot21 = zulu;
            zulu = true;
            _closure1_slot19 = zulu;
            tango = _closure1_slot17;
            zulu = tango.add;
            mike = mike.id;
            mike = zulu.bind(tango)(mike);
            mike = _closure1_slot27;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
 114:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: _getRole
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot21;
        mike = zulu.find;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.id;
            entity = _closure2_slot0;
            entity = mike === entity;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot34 = entity;
    golf = function(argFoo) { // Original name: syncGuildChanges
        _fun126242: for(var _fun126242_ip = 0; ; ) switch(_fun126242_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            entity = undefined;
            var _closure2_slot0 = entity;
            tango = _closure1_slot14;
            oscar = null;
            if(!(oscar != tango)) { _fun126242_ip = 276; continue _fun126242 }
 32:
            tango = _closure1_slot14;
            tango = tango.id;
            if(!(report === tango)) { _fun126242_ip = 276; continue _fun126242 }
 48:
            report = _closure1_slot18;
            tango = _closure1_slot13;
            tango = tango.SUBMITTING;
            if(!(report !== tango)) { _fun126242_ip = 276; continue _fun126242 }
 69:
            report = _closure1_slot11;
            tango = report.getProps;
            tango = tango.bind(report)();
            tango = tango.guild;
            _closure1_slot14 = tango;
            report = new Array(0);
            _closure2_slot0 = report;
            if(!(oscar != tango)) { _fun126242_ip = 206; continue _fun126242 }
 104:
            oscar = _closure1_slot1;
            golf = _closure1_slot3;
            tango = 9;
            tango = golf[tango];
            oscar = oscar.bind(entity)(tango);
            options = _closure1_slot10;
            golf = options.getRoles;
            tango = _closure1_slot14;
            tango = tango.id;
            tango = golf.bind(options)(tango);
            oscar = oscar.bind(entity)(tango);
            tango = oscar.values;
            golf = tango.bind(oscar)();
            oscar = golf.sortBy;
            tango = function(argFoo) {
                entity = argFoo;
                entity = entity.position;
                return entity;
            };
            oscar = oscar.bind(golf)(tango);
            tango = oscar.reverse;
            oscar = tango.bind(oscar)();
            tango = oscar.value;
            tango = tango.bind(oscar)();
            _closure2_slot0 = tango;
            report = tango;
 206:
            oscar = _closure1_slot17;
            tango = oscar.forEach;
            mike = function(argFoo) {
                _fun126244: for(var _fun126244_ip = 0; ; ) switch(_fun126244_ip) {
 0:
                    tango = argFoo;
                    var _closure3_slot0 = tango;
                    report = _closure1_slot34;
                    entity = undefined;
                    oscar = report.bind(entity)(tango);
                    report = -1;
                    var _closure3_slot1 = report;
                    verify = _closure2_slot0;
                    options = verify.find;
                    golf = function(argFoo, argBar) {
                        _fun126245: for(var _fun126245_ip = 0; ; ) switch(_fun126245_ip) {
 0:
                            entity = argFoo;
                            zulu = entity.id;
                            entity = _closure3_slot0;
                            if(!(zulu !== entity)) { _fun126245_ip = 23; continue _fun126245 }
 19:
                            entity = undefined;
                            return entity;
 23:
                            entity = argBar;
                            _closure3_slot1 = entity;
                            entity = true;
                            return entity;
                        }
                    };
                    options = options.bind(verify)(golf);
                    golf = null;
                    if(!(golf != options)) { _fun126244_ip = 81; continue _fun126244 }
 63:
                    if(!(golf != oscar)) { _fun126244_ip = 81; continue _fun126244 }
 67:
                    report = _closure2_slot0;
                    zulu = _closure3_slot1;
                    report[zulu] = oscar;
                    _fun126244_ip = 95; continue _fun126244;
 81:
                    zulu = _closure1_slot17;
                    mike = zulu.delete;
                    mike = mike.bind(zulu)(tango);
 95:
                    return entity;
                }
            };
            mike = tango.bind(oscar)(mike);
            mike = _closure1_slot17;
            mike = mike.size;
            tango = 0;
            if(!(tango === mike)) { _fun126242_ip = 248; continue _fun126242 }
 242:
            mike = false;
            _closure1_slot19 = mike;
 248:
            mike = false;
            _closure1_slot20 = mike;
            mike = new Array(0);
            yankee = mike;
            offset = report;
            verify = 0;
            tango = arraySpread(yankee, offset, verify);
            _closure1_slot21 = mike;
            return entity;
 276:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot35 = golf;
    mike = global;
    romeo = mike.Object;
    yankee = romeo.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, verify);
    entity = 0;
    verify = oscar[entity];
    entity = undefined;
    verify = options.bind(entity)(verify);
    var _closure1_slot4 = verify;
    verify = 1;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot5 = verify;
    verify = 2;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot6 = verify;
    verify = 3;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot7 = verify;
    verify = 4;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot8 = verify;
    verify = 5;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot9 = verify;
    verify = 6;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot10 = verify;
    verify = 7;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot11 = verify;
    verify = 8;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    yankee = verify.GuildSettingsSections;
    var _closure1_slot12 = yankee;
    verify = verify.FormStates;
    var _closure1_slot13 = verify;
    yankee = mike.Set;
    romeo = yankee.prototype;
    romeo = Object.create(romeo, {constructor: {value: yankee}});
    sizing = romeo;
    yankee = new sizing[yankee](kilo);
    yankee = yankee instanceof Object ? yankee : romeo;
    var _closure1_slot17 = yankee;
    verify = verify.CLOSED;
    var _closure1_slot18 = verify;
    verify = false;
    var _closure1_slot19 = verify;
    var _closure1_slot20 = verify;
    yankee = new Array(0);
    var _closure1_slot21 = yankee;
    yankee = new Array(0);
    var _closure1_slot22 = yankee;
    var _closure1_slot23 = verify;
    verify = mike.Set;
    yankee = verify.prototype;
    yankee = Object.create(yankee, {constructor: {value: verify}});
    sizing = yankee;
    verify = new sizing[verify](kilo);
    verify = verify instanceof Object ? verify : yankee;
    var _closure1_slot24 = verify;
    verify = mike.Map;
    yankee = verify.prototype;
    yankee = Object.create(yankee, {constructor: {value: verify}});
    sizing = yankee;
    verify = new sizing[verify](kilo);
    verify = verify instanceof Object ? verify : yankee;
    var _closure1_slot25 = verify;
    mike = mike.Map;
    verify = mike.prototype;
    verify = Object.create(verify, {constructor: {value: mike}});
    sizing = verify;
    mike = new sizing[mike](kilo);
    mike = mike instanceof Object ? mike : verify;
    var _closure1_slot26 = mike;
    mike = 9;
    mike = oscar[mike];
    romeo = options.bind(entity)(mike);
    yankee = romeo.debounce;
    verify = function() {
        _fun126246: for(var _fun126246_ip = 0; ; ) switch(_fun126246_ip) {
 0:
            zulu = false;
            var _closure2_slot0 = zulu;
            tango = _closure1_slot20;
            if(!tango) { _fun126246_ip = 52; continue _fun126246 }
 18:
            report = _closure1_slot31;
            tango = undefined;
            tango = report.bind(tango)();
            report = tango.length;
            tango = 0;
            tango = report > tango;
            _closure1_slot20 = tango;
            if(tango) { _fun126246_ip = 52; continue _fun126246 }
 46:
            tango = true;
            _closure2_slot0 = tango;
 52:
            offset = _closure1_slot17;
            golf = new Array(0);
            report = 0;
            yankee = golf;
            verify = 0;
            tango = arraySpread(yankee, offset, verify);
            oscar = golf.forEach;
            tango = function(argFoo) {
                _fun126247: for(var _fun126247_ip = 0; ; ) switch(_fun126247_ip) {
 0:
                    tango = argFoo;
                    report = _closure1_slot1;
                    zulu = _closure1_slot3;
                    entity = 9;
                    zulu = zulu[entity];
                    entity = undefined;
                    golf = report.bind(entity)(zulu);
                    oscar = golf.isEqual;
                    zulu = _closure1_slot34;
                    report = zulu.bind(entity)(tango);
                    zulu = function(argFoo) { // Original name: getOriginalRole
                        mike = argFoo;
                        var _closure4_slot0 = mike;
                        zulu = _closure1_slot22;
                        mike = zulu.find;
                        entity = function(argFoo) {
                            entity = argFoo;
                            mike = entity.id;
                            entity = _closure4_slot0;
                            entity = mike === entity;
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    zulu = zulu.bind(entity)(tango);
                    zulu = oscar.bind(golf)(report, zulu);
                    if(!zulu) { _fun126247_ip = 89; continue _fun126247 }
 66:
                    zulu = _closure1_slot17;
                    mike = zulu.delete;
                    mike = mike.bind(zulu)(tango);
                    mike = true;
                    _closure2_slot0 = mike;
 89:
                    return entity;
                }
            };
            tango = oscar.bind(golf)(tango);
            tango = _closure1_slot17;
            tango = tango.size;
            if(!(report === tango)) { _fun126246_ip = 105; continue _fun126246 }
 101:
            _closure1_slot19 = zulu;
 105:
            tango = _closure1_slot23;
            if(!tango) { _fun126246_ip = 154; continue _fun126246 }
 112:
            golf = _closure1_slot1;
            oscar = _closure1_slot3;
            report = 9;
            oscar = oscar[report];
            report = undefined;
            options = golf.bind(report)(oscar);
            golf = options.isEqual;
            oscar = _closure1_slot25;
            report = _closure1_slot26;
            tango = golf.bind(options)(oscar, report);
 154:
            if(!tango) { _fun126246_ip = 167; continue _fun126246 }
 157:
            tango = true;
            _closure2_slot0 = tango;
            _closure1_slot23 = zulu;
 167:
            mike = _closure2_slot0;
            if(!mike) { _fun126246_ip = 188; continue _fun126246 }
 174:
            mike = _closure1_slot28;
            entity = mike.emitChange;
            entity = entity.bind(mike)();
 188:
            entity = undefined;
            return entity;
        }
    };
    mike = 500;
    mike = yankee.bind(romeo)(verify, mike);
    var _closure1_slot27 = mike;
    mike = 15;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    verify = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: GuildSettingsRolesStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot4;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot29;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot8;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot5;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            report = this;
            tango = report.waitFor;
            zulu = _closure1_slot11;
            mike = _closure1_slot9;
            entity = _closure1_slot10;
            entity = tango.bind(report)(zulu, mike, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(15);
        entity[0] = report;
        report = {};
        golf = 'hasChanges';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun126253: for(var _fun126253_ip = 0; ; ) switch(_fun126253_ip) {
 0:
                entity = _closure1_slot19;
                if(entity) { _fun126253_ip = 14; continue _fun126253 }
 10:
                entity = _closure1_slot20;
 14:
                if(entity) { _fun126253_ip = 21; continue _fun126253 }
 17:
                entity = _closure1_slot23;
 21:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'errorMessage';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot16;
            return entity;
        };
        report['get'] = golf;
        entity[2] = report;
        report = {};
        golf = 'hasSortChanges';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot20;
            return entity;
        };
        report['get'] = golf;
        entity[3] = report;
        report = {};
        golf = 'hasRoleConfigurationChanges';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot23;
            return entity;
        };
        report['get'] = golf;
        entity[4] = report;
        report = {};
        golf = 'guild';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot14;
            return entity;
        };
        report['get'] = golf;
        entity[5] = report;
        report = {};
        golf = 'editedRoleIds';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = global;
            zulu = entity.Array;
            mike = zulu.from;
            entity = _closure1_slot17;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['get'] = golf;
        entity[6] = report;
        report = {};
        golf = 'editedRoleIdsForConfigurations';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot24;
            return entity;
        };
        report['get'] = golf;
        entity[7] = report;
        report = {};
        golf = 'roles';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot21;
            return entity;
        };
        report['get'] = golf;
        entity[8] = report;
        report = {};
        golf = 'formState';
        report['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot18;
            return entity;
        };
        report['get'] = golf;
        entity[9] = report;
        report = {};
        golf = 'getSortDeltas';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = _closure1_slot31;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'showNotice';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = this;
            entity = mike.hasChanges;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'getRole';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot34;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'getPermissionSearchQuery';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot15;
            return entity;
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'getEditedRoleConnectionConfigurationsMap';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot26;
            return entity;
        };
        report['value'] = oscar;
        entity[14] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = mike.bind(entity)(verify);
    mike = 'GuildSettingsRolesStore';
    verify['displayName'] = mike;
    mike = 16;
    mike = oscar[mike];
    kilo = options.bind(entity)(mike);
    mike = {};
    yankee = function() { // Original name: GUILD_SETTINGS_ROLES_INIT
        mike = _closure1_slot32;
        entity = undefined;
        mike = mike.bind(entity)();
        return entity;
    };
    mike['GUILD_SETTINGS_ROLES_INIT'] = yankee;
    mike['GUILD_SETTINGS_INIT'] = offset;
    mike['GUILD_SETTINGS_SET_SECTION'] = offset;
    offset = function(argFoo) { // Original name: handleSortUpdate
        _fun126268: for(var _fun126268_ip = 0; ; ) switch(_fun126268_ip) {
 0:
            entity = argFoo;
            tango = entity.roles;
            zulu = _closure1_slot21;
            entity = null;
            if(!(entity != zulu)) { _fun126268_ip = 40; continue _fun126268 }
 22:
            zulu = tango.length;
            entity = _closure1_slot21;
            entity = entity.length;
            if(!(zulu === entity)) { _fun126268_ip = 117; continue _fun126268 }
 40:
            zulu = tango.map;
            entity = function(argFoo) {
                zulu = _closure1_slot34;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            report = zulu.bind(tango)(entity);
            tango = report.filter;
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            entity = 11;
            zulu = zulu[entity];
            entity = undefined;
            zulu = oscar.bind(entity)(zulu);
            zulu = zulu.isNotNullish;
            zulu = tango.bind(report)(zulu);
            _closure1_slot21 = zulu;
            zulu = true;
            _closure1_slot20 = zulu;
            mike = _closure1_slot27;
            mike = mike.bind(entity)();
            return entity;
 117:
            entity = false;
            return entity;
        }
    };
    mike['GUILD_SETTINGS_ROLES_SORT_UPDATE'] = offset;
    offset = function(argFoo) { // Original name: handleUpdatePermissions
        _fun126270: for(var _fun126270_ip = 0; ; ) switch(_fun126270_ip) {
 0:
            entity = argFoo;
            mike = entity.id;
            verify = entity.flag;
            report = entity.allow;
            entity = _closure1_slot34;
            tango = undefined;
            zulu = entity.bind(tango)(mike);
            entity = null;
            if(!(entity != zulu)) { _fun126270_ip = 113; continue _fun126270 }
 40:
            options = zulu.permissions;
            mike = _closure1_slot33;
            entity = {};
            golf = _closure1_slot2;
            offset = _closure1_slot3;
            oscar = 12;
            oscar = offset[oscar];
            golf = golf.bind(tango)(oscar);
            if(report) { _fun126270_ip = 89; continue _fun126270 }
 75:
            report = golf.remove;
            report = report.bind(golf)(options, verify);
            _fun126270_ip = 100; continue _fun126270;
 89:
            oscar = golf.add;
            report = oscar.bind(golf)(options, verify);
 100:
            entity['permissions'] = report;
            entity = mike.bind(tango)(zulu, entity);
            return entity;
 113:
            entity = false;
            return entity;
        }
    };
    mike['GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS'] = offset;
    offset = function(argFoo) { // Original name: handleUpdatePermissionSet
        _fun126271: for(var _fun126271_ip = 0; ; ) switch(_fun126271_ip) {
 0:
            entity = argFoo;
            zulu = entity.id;
            oscar = entity.permissions;
            entity = _closure1_slot34;
            report = undefined;
            tango = entity.bind(report)(zulu);
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun126271_ip = 54; continue _fun126271 }
 37:
            zulu = _closure1_slot33;
            mike = {};
            mike['permissions'] = oscar;
            entity = zulu.bind(report)(tango, mike);
 54:
            return entity;
        }
    };
    mike['GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET'] = offset;
    offset = function(argFoo) { // Original name: handleClearRolePermissions
        _fun126272: for(var _fun126272_ip = 0; ; ) switch(_fun126272_ip) {
 0:
            entity = argFoo;
            mike = entity.id;
            entity = _closure1_slot34;
            report = undefined;
            tango = entity.bind(report)(mike);
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun126272_ip = 74; continue _fun126272 }
 31:
            zulu = _closure1_slot33;
            mike = {};
            golf = _closure1_slot2;
            options = _closure1_slot3;
            oscar = 13;
            oscar = options[oscar];
            oscar = golf.bind(report)(oscar);
            oscar = oscar.NONE;
            mike['permissions'] = oscar;
            entity = zulu.bind(report)(tango, mike);
 74:
            return entity;
        }
    };
    mike['GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateName
        _fun126273: for(var _fun126273_ip = 0; ; ) switch(_fun126273_ip) {
 0:
            entity = argFoo;
            zulu = entity.id;
            oscar = entity.name;
            entity = _closure1_slot34;
            report = undefined;
            tango = entity.bind(report)(zulu);
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun126273_ip = 52; continue _fun126273 }
 36:
            zulu = _closure1_slot33;
            mike = {};
            mike['name'] = oscar;
            entity = zulu.bind(report)(tango, mike);
 52:
            return entity;
        }
    };
    mike['GUILD_SETTINGS_ROLES_UPDATE_NAME'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateDescription
        _fun126274: for(var _fun126274_ip = 0; ; ) switch(_fun126274_ip) {
 0:
            entity = argFoo;
            zulu = entity.id;
            oscar = entity.description;
            entity = _closure1_slot34;
            report = undefined;
            tango = entity.bind(report)(zulu);
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun126274_ip = 52; continue _fun126274 }
 36:
            zulu = _closure1_slot33;
            mike = {};
            mike['description'] = oscar;
            entity = zulu.bind(report)(tango, mike);
 52:
            return entity;
        }
    };
    mike['GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateColor
        _fun126275: for(var _fun126275_ip = 0; ; ) switch(_fun126275_ip) {
 0:
            entity = argFoo;
            tango = entity.id;
            golf = entity.color;
            entity = null;
            mike = 0;
            oscar = null;
            if(!(mike !== golf)) { _fun126275_ip = 59; continue _fun126275 }
 23:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 14;
            zulu = zulu[mike];
            mike = undefined;
            zulu = report.bind(mike)(zulu);
            mike = zulu.int2hex;
            oscar = mike.bind(zulu)(golf);
 59:
            zulu = _closure1_slot34;
            report = undefined;
            tango = zulu.bind(report)(tango);
            entity = entity != tango;
            if(!entity) { _fun126275_ip = 101; continue _fun126275 }
 80:
            zulu = _closure1_slot33;
            mike = {};
            mike['color'] = golf;
            mike['colorString'] = oscar;
            entity = zulu.bind(report)(tango, mike);
 101:
            return entity;
        }
    };
    mike['GUILD_SETTINGS_ROLES_UPDATE_COLOR'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateSettings
        _fun126276: for(var _fun126276_ip = 0; ; ) switch(_fun126276_ip) {
 0:
            entity = argFoo;
            zulu = entity.id;
            golf = entity.hoist;
            oscar = entity.mentionable;
            entity = _closure1_slot34;
            report = undefined;
            tango = entity.bind(report)(zulu);
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun126276_ip = 65; continue _fun126276 }
 43:
            zulu = _closure1_slot33;
            mike = {};
            mike['hoist'] = golf;
            mike['mentionable'] = oscar;
            entity = zulu.bind(report)(tango, mike);
 65:
            return entity;
        }
    };
    mike['GUILD_SETTINGS_ROLES_UPDATE_SETTINGS'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateRoleIcon
        _fun126277: for(var _fun126277_ip = 0; ; ) switch(_fun126277_ip) {
 0:
            entity = argFoo;
            zulu = entity.id;
            golf = entity.icon;
            oscar = entity.unicodeEmoji;
            entity = _closure1_slot34;
            report = undefined;
            tango = entity.bind(report)(zulu);
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun126277_ip = 63; continue _fun126277 }
 42:
            zulu = _closure1_slot33;
            mike = {};
            mike['icon'] = golf;
            mike['unicodeEmoji'] = oscar;
            entity = zulu.bind(report)(tango, mike);
 63:
            return entity;
        }
    };
    mike['GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON'] = offset;
    offset = function(argFoo) { // Original name: handleInsertRole
        _fun126278: for(var _fun126278_ip = 0; ; ) switch(_fun126278_ip) {
 0:
            entity = argFoo;
            tango = entity.role;
            mike = entity.searchQuery;
            var _closure1_slot15 = mike;
            report = null;
            if(!(report != tango)) { _fun126278_ip = 101; continue _fun126278 }
 28:
            oscar = _closure1_slot34;
            zulu = tango.id;
            mike = undefined;
            zulu = oscar.bind(mike)(zulu);
            if(!(report != zulu)) { _fun126278_ip = 60; continue _fun126278 }
 48:
            zulu = _closure1_slot33;
            zulu = zulu.bind(mike)(tango, tango);
            _fun126278_ip = 101; continue _fun126278;
 60:
            options = _closure1_slot21;
            zulu = new Array(1);
            golf = 0;
            verify = zulu;
            report = arraySpread(verify, options, golf);
            zulu[report] = tango;
            tango = 1;
            tango = report + tango;
            _closure1_slot21 = zulu;
            entity = _closure1_slot27;
            entity = entity.bind(mike)();
 101:
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_SETTINGS_ROLE_SELECT'] = offset;
    offset = function(argFoo) { // Original name: handleFetchRoleConnectionConfigurations
        _fun126279: for(var _fun126279_ip = 0; ; ) switch(_fun126279_ip) {
 0:
            entity = argFoo;
            tango = entity.roleId;
            oscar = entity.roleConnectionConfigurations;
            zulu = _closure1_slot34;
            entity = undefined;
            zulu = zulu.bind(entity)(tango);
            tango = null;
            if(!(tango != zulu)) { _fun126279_ip = 143; continue _fun126279 }
 35:
            golf = _closure1_slot25;
            report = golf.get;
            tango = zulu.id;
            golf = report.bind(golf)(tango);
            report = _closure1_slot1;
            options = _closure1_slot3;
            tango = 9;
            tango = options[tango];
            report = report.bind(entity)(tango);
            tango = report.isEqual;
            tango = tango.bind(report)(golf, oscar);
            if(tango) { _fun126279_ip = 139; continue _fun126279 }
 89:
            golf = _closure1_slot26;
            report = golf.set;
            tango = zulu.id;
            tango = report.bind(golf)(tango, oscar);
            report = _closure1_slot25;
            tango = report.set;
            zulu = zulu.id;
            zulu = tango.bind(report)(zulu, oscar);
            mike = _closure1_slot27;
            mike = mike.bind(entity)();
            return entity;
 139:
            entity = false;
            return entity;
 143:
            entity = false;
            return entity;
        }
    };
    mike['GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateRoleConnectionConfigurations
        _fun126280: for(var _fun126280_ip = 0; ; ) switch(_fun126280_ip) {
 0:
            entity = argFoo;
            tango = entity.roleId;
            oscar = entity.roleConnectionConfigurations;
            zulu = _closure1_slot34;
            entity = undefined;
            zulu = zulu.bind(entity)(tango);
            tango = null;
            if(!(tango != zulu)) { _fun126280_ip = 90; continue _fun126280 }
 35:
            tango = true;
            _closure1_slot23 = tango;
            golf = _closure1_slot24;
            report = golf.add;
            tango = zulu.id;
            tango = report.bind(golf)(tango);
            report = _closure1_slot26;
            tango = report.set;
            zulu = zulu.id;
            zulu = tango.bind(report)(zulu, oscar);
            mike = _closure1_slot27;
            mike = mike.bind(entity)();
            return entity;
 90:
            entity = false;
            return entity;
        }
    };
    mike['GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS'] = offset;
    offset = function() { // Original name: handleClose
        entity = null;
        _closure1_slot14 = entity;
        entity = new Array(0);
        _closure1_slot21 = entity;
        _closure1_slot22 = entity;
        zulu = _closure1_slot25;
        entity = zulu.clear;
        entity = entity.bind(zulu)();
        zulu = _closure1_slot17;
        entity = zulu.clear;
        entity = entity.bind(zulu)();
        zulu = _closure1_slot26;
        entity = zulu.clear;
        entity = entity.bind(zulu)();
        entity = global;
        entity = entity.Set;
        zulu = entity.prototype;
        zulu = Object.create(zulu, {constructor: {value: entity}});
        tango = zulu;
        entity = new tango[entity](zulu);
        entity = entity instanceof Object ? entity : zulu;
        _closure1_slot24 = entity;
        entity = false;
        _closure1_slot19 = entity;
        _closure1_slot20 = entity;
        _closure1_slot23 = entity;
        entity = _closure1_slot13;
        entity = entity.CLOSED;
        _closure1_slot18 = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_SETTINGS_CLOSE'] = offset;
    mike['GUILD_ROLE_CREATE'] = golf;
    mike['GUILD_ROLE_UPDATE'] = golf;
    golf = function(argFoo) { // Original name: handleRoleDelete
        _fun126282: for(var _fun126282_ip = 0; ; ) switch(_fun126282_ip) {
 0:
            zulu = argFoo;
            report = _closure1_slot24;
            tango = report.has;
            mike = zulu.roleId;
            mike = tango.bind(report)(mike);
            if(!mike) { _fun126282_ip = 95; continue _fun126282 }
 29:
            report = _closure1_slot24;
            tango = report.delete;
            mike = zulu.roleId;
            mike = tango.bind(report)(mike);
            report = _closure1_slot25;
            tango = report.delete;
            mike = zulu.roleId;
            mike = tango.bind(report)(mike);
            report = _closure1_slot26;
            tango = report.delete;
            mike = zulu.roleId;
            mike = tango.bind(report)(mike);
            mike = false;
            _closure1_slot23 = mike;
 95:
            mike = _closure1_slot35;
            entity = undefined;
            entity = mike.bind(entity)(zulu);
            return entity;
        }
    };
    mike['GUILD_ROLE_DELETE'] = golf;
    golf = function() { // Original name: handleSubmitting
        entity = _closure1_slot13;
        entity = entity.SUBMITTING;
        _closure1_slot18 = entity;
        entity = undefined;
        return entity;
    };
    mike['GUILD_SETTINGS_ROLES_SUBMITTING'] = golf;
    golf = function(argFoo) { // Original name: handleSaveFail
        entity = argFoo;
        mike = entity.message;
        zulu = _closure1_slot13;
        zulu = zulu.OPEN;
        _closure1_slot18 = zulu;
        _closure1_slot16 = mike;
        entity = undefined;
        return entity;
    };
    mike['GUILD_SETTINGS_ROLES_SAVE_FAIL'] = golf;
    golf = function() { // Original name: handleSaveSuccess
        zulu = _closure1_slot32;
        entity = undefined;
        mike = false;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    mike['GUILD_SETTINGS_ROLES_SAVE_SUCCESS'] = golf;
    golf = verify.prototype;
    golf = Object.create(golf, {constructor: {value: verify}});
    sizing = golf;
    backup = mike;
    mike = new sizing[verify](kilo, backup, foxtrot);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot28 = mike;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/GuildSettingsRolesStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();