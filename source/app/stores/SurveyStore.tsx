// app/stores/SurveyStore.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun98917: for(var _fun98917_ip = 0; ; ) switch(_fun98917_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot27;
            entity = entity.bind(zulu)();
            if(entity) { _fun98917_ip = 51; continue _fun98917 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun98917_ip = 92; continue _fun98917;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun98917_ip = 71; continue _fun98917 }
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
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun98918: for(var _fun98918_ip = 0; ; ) switch(_fun98918_ip) {
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
            _fun98918_ip = 76; continue _fun98918;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot27 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun98921: for(var _fun98921_ip = 0; ; ) switch(_fun98921_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun98921_ip = 46; continue _fun98921 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun98921_ip = 55; continue _fun98921 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun98921_ip = 345; continue _fun98921 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun98921_ip = 323; continue _fun98921 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun98921_ip = 283; continue _fun98921 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun98921_ip = 270; continue _fun98921 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun98921_ip = 163; continue _fun98921 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun98921_ip = 179; continue _fun98921 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun98921_ip = 249; continue _fun98921 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun98921_ip = 249; continue _fun98921 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun98921_ip = 234; continue _fun98921 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun98921_ip = 247; continue _fun98921 }
 234:
            verify = _closure1_slot29;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun98921_ip = 265; continue _fun98921;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun98921_ip = 283; continue _fun98921;
 270:
            golf = _closure1_slot29;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun98921_ip = 323; continue _fun98921 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun98921_ip = 330; continue _fun98921 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun98922: for(var _fun98922_ip = 0; ; ) switch(_fun98922_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun98922_ip = 56; continue _fun98922 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun98922_ip = 67; continue _fun98922;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun98923: for(var _fun98923_ip = 0; ; ) switch(_fun98923_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun98923_ip = 23; continue _fun98923 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun98923_ip = 33; continue _fun98923 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun98923_ip = 70; continue _fun98923 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun98923_ip = 55; continue _fun98923 }
 70:
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: meetsSurveyRequirements
        _fun98924: for(var _fun98924_ip = 0; ; ) switch(_fun98924_ip) {
 0:
            sierra = argFoo;
            config = undefined;
            record = undefined;
            context = undefined;
            papa = undefined;
            target = undefined;
            status = undefined;
            sequence = sierra.guild_requirements;
            if(!(config === sequence)) { _fun98924_ip = 31; continue _fun98924 }
 27:
            sequence = new Array(0);
 31:
            vacuum = sierra.guild_size;
            if(!(config === vacuum)) { _fun98924_ip = 51; continue _fun98924 }
 41:
            vacuum = [null, null];
 51:
            control = sierra.guild_permissions;
            if(!(config === control)) { _fun98924_ip = 67; continue _fun98924 }
 63:
            control = new Array(0);
 67:
            zulu = sequence.length;
            source = 0;
            entity = true;
            if(!(source !== zulu)) { _fun98924_ip = 1175; continue _fun98924 }
 83:
            zulu = _closure1_slot28;
            oscar = zulu.bind(config)(sequence);
            report = oscar.bind(config)();
            zulu = report.done;
            if(zulu) { _fun98924_ip = 149; continue _fun98924 }
 107:
            options = report.value;
            golf = _closure1_slot25;
            zulu = golf.has;
            zulu = zulu.bind(golf)(options);
            entity = false;
            if(!zulu) { _fun98924_ip = 1175; continue _fun98924 }
 134:
            golf = oscar.bind(config)();
            zulu = golf.done;
            report = golf;
            if(!zulu) { _fun98924_ip = 107; continue _fun98924 }
 149:
            report = sequence.includes;
            zulu = _closure1_slot24;
            zulu = zulu.GUILD_SIZE_ALL;
            report = report.bind(sequence)(zulu);
            zulu = global;
            golf = zulu.Object;
            oscar = golf.values;
            options = _closure1_slot10;
            zulu = options.getGuilds;
            zulu = zulu.bind(options)();
            echo = oscar.bind(golf)(zulu);
            zulu = echo.length;
            oscar = source < zulu;
            result = null;
            output = 12;
            sizing = 1;
            kilo = true;
            backup = 0;
            foxtrot = undefined;
            romeo = undefined;
            yankee = undefined;
            offset = undefined;
            verify = undefined;
            options = undefined;
            golf = undefined;
            zulu = true;
            if(!oscar) { _fun98924_ip = 1163; continue _fun98924 }
 244:
            record = echo[backup];
            if(report) { _fun98924_ip = 277; continue _fun98924 }
 251:
            lima = sequence.includes;
            oscar = _closure1_slot24;
            oscar = oscar.GUILD_SIZE;
            oscar = lima.bind(sequence)(oscar);
            if(!oscar) { _fun98924_ip = 429; continue _fun98924 }
 277:
            whiskey = _closure1_slot9;
            lima = whiskey.getMemberCount;
            oscar = record;
            oscar = oscar.id;
            variable40 = lima.bind(whiskey)(oscar);
            oscar = result == variable40;
            lima = false;
            variable39 = foxtrot;
            variable38 = variable40;
            variable37 = yankee;
            variable36 = offset;
            quebec = verify;
            equality = options;
            whiskey = golf;
            if(oscar) { _fun98924_ip = 1121; continue _fun98924 }
 333:
            oscar = vacuum[source];
            if(!(result != oscar)) { _fun98924_ip = 378; continue _fun98924 }
 341:
            oscar = vacuum[source];
            oscar = variable40 < oscar;
            lima = false;
            variable39 = foxtrot;
            variable38 = variable40;
            variable37 = yankee;
            variable36 = offset;
            quebec = verify;
            equality = options;
            whiskey = golf;
            if(oscar) { _fun98924_ip = 1121; continue _fun98924 }
 378:
            oscar = vacuum[sizing];
            romeo = variable40;
            if(!(result != oscar)) { _fun98924_ip = 429; continue _fun98924 }
 389:
            oscar = vacuum[sizing];
            oscar = variable40 > oscar;
            romeo = variable40;
            lima = false;
            variable39 = foxtrot;
            variable38 = romeo;
            variable37 = yankee;
            variable36 = offset;
            quebec = verify;
            equality = options;
            whiskey = golf;
            if(oscar) { _fun98924_ip = 1121; continue _fun98924 }
 429:
            variable40 = sequence.includes;
            oscar = _closure1_slot24;
            oscar = oscar.IS_COMMUNITY;
            oscar = variable40.bind(sequence)(oscar);
            if(!oscar) { _fun98924_ip = 506; continue _fun98924 }
 452:
            variable41 = record;
            variable40 = variable41.hasFeature;
            oscar = _closure1_slot14;
            oscar = oscar.COMMUNITY;
            oscar = variable40.bind(variable41)(oscar);
            lima = kilo;
            variable39 = foxtrot;
            variable38 = romeo;
            variable37 = yankee;
            variable36 = offset;
            quebec = verify;
            equality = options;
            whiskey = golf;
            if(!oscar) { _fun98924_ip = 1121; continue _fun98924 }
 506:
            variable40 = sequence.includes;
            oscar = _closure1_slot24;
            oscar = oscar.IS_HUB;
            oscar = variable40.bind(sequence)(oscar);
            if(!oscar) { _fun98924_ip = 583; continue _fun98924 }
 529:
            variable41 = record;
            variable40 = variable41.hasFeature;
            oscar = _closure1_slot14;
            oscar = oscar.HUB;
            oscar = variable40.bind(variable41)(oscar);
            lima = kilo;
            variable39 = foxtrot;
            variable38 = romeo;
            variable37 = yankee;
            variable36 = offset;
            quebec = verify;
            equality = options;
            whiskey = golf;
            if(!oscar) { _fun98924_ip = 1121; continue _fun98924 }
 583:
            variable40 = sequence.includes;
            oscar = _closure1_slot24;
            oscar = oscar.GUILD_PERMISSIONS;
            oscar = variable40.bind(sequence)(oscar);
            if(!oscar) { _fun98924_ip = 794; continue _fun98924 }
 609:
            oscar = control.length;
            lima = kilo;
            variable39 = foxtrot;
            variable38 = romeo;
            variable37 = yankee;
            variable36 = offset;
            quebec = verify;
            equality = options;
            whiskey = golf;
            if(!(source !== oscar)) { _fun98924_ip = 1121; continue _fun98924 }
 645:
            papa = false;
            oscar = _closure1_slot28;
            oscar = oscar.bind(config)(control);
            target = oscar;
            oscar = oscar.bind(config)();
            context = oscar;
            oscar = oscar.done;
            if(oscar) { _fun98924_ip = 761; continue _fun98924 }
 674:
            oscar = context;
            status = oscar.value;
 682: // try_start_0
            variable40 = _closure1_slot2;
            oscar = _closure1_slot3;
            oscar = oscar[output];
            variable41 = variable40.bind(config)(oscar);
            variable40 = variable41.deserialize;
            oscar = status;
            variable42 = variable40.bind(variable41)(oscar);
            variable41 = _closure1_slot11;
            variable40 = variable41.can;
            oscar = record;
            oscar = variable40.bind(variable41)(variable42, oscar);
            if(oscar) { _fun98924_ip = 737; continue _fun98924 }
 735: // try_end0
            _fun98924_ip = 743; continue _fun98924;
 737: // try_start_1
            papa = true;
 739: // try_end1
            _fun98924_ip = 761; continue _fun98924;
 741: // catch_target0 // catch_target1
            CatchBlockStart(arg_register=5);
 743:
            oscar = target;
            oscar = oscar.bind(config)();
            context = oscar;
            oscar = oscar.done;
            if(!oscar) { _fun98924_ip = 674; continue _fun98924 }
 761:
            oscar = papa;
            lima = kilo;
            variable39 = foxtrot;
            variable38 = romeo;
            variable37 = yankee;
            variable36 = offset;
            quebec = verify;
            equality = options;
            whiskey = golf;
            if(!oscar) { _fun98924_ip = 1121; continue _fun98924 }
 794:
            variable40 = _closure1_slot13;
            oscar = variable40.getCurrentUser;
            variable43 = oscar.bind(variable40)();
            oscar = result == variable43;
            variable40 = undefined;
            if(oscar) { _fun98924_ip = 821; continue _fun98924 }
 816:
            variable40 = variable43.id;
 821:
            variable44 = record;
            oscar = variable44.ownerId;
            variable42 = variable40 === oscar;
            variable41 = _closure1_slot11;
            variable40 = variable41.can;
            oscar = _closure1_slot15;
            oscar = oscar.ADMINISTRATOR;
            variable41 = variable40.bind(variable41)(oscar, variable44);
            variable40 = sequence.includes;
            oscar = _closure1_slot24;
            oscar = oscar.IS_OWNER;
            oscar = variable40.bind(sequence)(oscar);
            if(!oscar) { _fun98924_ip = 913; continue _fun98924 }
 883:
            lima = kilo;
            variable39 = foxtrot;
            variable38 = romeo;
            variable37 = variable43;
            quebec = variable41;
            equality = options;
            whiskey = golf;
            variable36 = variable42;
            if(!variable36) { _fun98924_ip = 1121; continue _fun98924 }
 913:
            variable40 = sequence.includes;
            oscar = _closure1_slot24;
            oscar = oscar.IS_ADMIN;
            oscar = variable40.bind(sequence)(oscar);
            if(!oscar) { _fun98924_ip = 966; continue _fun98924 }
 936:
            lima = kilo;
            variable39 = foxtrot;
            variable38 = romeo;
            variable37 = variable43;
            variable36 = variable42;
            quebec = variable41;
            equality = options;
            whiskey = golf;
            if(!variable41) { _fun98924_ip = 1121; continue _fun98924 }
 966:
            variable44 = _closure1_slot21;
            variable40 = variable44;
            if(!(result == variable44)) { _fun98924_ip = 979; continue _fun98924 }
 977:
            variable40 = {};
 979:
            _closure1_slot21 = variable40;
            oscar = sierra.key;
            oscar = variable40[oscar];
            if(!(result == oscar)) { _fun98924_ip = 1009; continue _fun98924 }
 996:
            variable40 = _closure1_slot21;
            oscar = sierra.key;
            variable40[oscar] = sierra;
 1009:
            variable40 = _closure1_slot12;
            oscar = variable40.getGuildId;
            variable40 = oscar.bind(variable40)();
            oscar = result != variable40;
            if(!oscar) { _fun98924_ip = 1042; continue _fun98924 }
 1030:
            variable45 = record;
            variable45 = variable45.id;
            oscar = variable40 === variable45;
 1042:
            variable46 = sequence.includes;
            variable45 = _closure1_slot24;
            variable45 = variable45.IS_VIEWING;
            variable45 = variable46.bind(sequence)(variable45);
            if(!variable45) { _fun98924_ip = 1092; continue _fun98924 }
 1065:
            lima = kilo;
            variable39 = variable44;
            variable38 = romeo;
            variable37 = variable43;
            variable36 = variable42;
            quebec = variable41;
            equality = variable40;
            whiskey = oscar;
            if(!whiskey) { _fun98924_ip = 1121; continue _fun98924 }
 1092:
            lima = kilo;
            variable39 = variable44;
            variable38 = romeo;
            variable37 = variable43;
            variable36 = variable42;
            quebec = variable41;
            equality = variable40;
            whiskey = oscar;
            entity = true;
            if(!report) { _fun98924_ip = 1175; continue _fun98924 }
 1121:
            backup = backup + 1;
            oscar = echo.length;
            kilo = lima;
            foxtrot = variable39;
            romeo = variable38;
            yankee = variable37;
            offset = variable36;
            verify = quebec;
            options = equality;
            golf = whiskey;
            zulu = kilo;
            if(backup < oscar) { _fun98924_ip = 244; continue _fun98924 }
 1163:
            entity = false;
            if(!report) { _fun98924_ip = 1175; continue _fun98924 }
 1168:
            entity = false;
            if(!zulu) { _fun98924_ip = 1175; continue _fun98924 }
 1173:
            entity = true;
 1175:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    verify = function(argFoo) { // Original name: setSurvey
        _fun98925: for(var _fun98925_ip = 0; ; ) switch(_fun98925_ip) {
 0:
            entity = argFoo;
            zulu = entity.survey;
            tango = _closure1_slot18;
            entity = global;
            report = entity.Date;
            entity = report.now;
            entity = entity.bind(report)();
            tango['lastFetched'] = entity;
            entity = _closure1_slot18;
            entity = entity.hiddenSurveys;
            tango = null;
            if(!(tango == entity)) { _fun98925_ip = 67; continue _fun98925 }
 55:
            report = _closure1_slot18;
            entity = {};
            report['hiddenSurveys'] = entity;
 67:
            if(!(tango != zulu)) { _fun98925_ip = 232; continue _fun98925 }
 74:
            entity = _closure1_slot18;
            report = entity.hiddenSurveys;
            entity = zulu.key;
            entity = report[entity];
            if(!(tango == entity)) { _fun98925_ip = 232; continue _fun98925 }
 100:
            report = _closure1_slot30;
            entity = undefined;
            report = report.bind(entity)(zulu);
            if(report) { _fun98925_ip = 116; continue _fun98925 }
 114:
            return entity;
 116:
            report = _closure1_slot19;
            if(report) { _fun98925_ip = 236; continue _fun98925 }
 123:
            report = _closure1_slot20;
            if(report) { _fun98925_ip = 236; continue _fun98925 }
 130:
            oscar = _closure1_slot23;
            golf = _closure1_slot0;
            options = _closure1_slot3;
            report = 13;
            report = options[report];
            report = golf.bind(entity)(report);
            options = report.Storage;
            golf = options.get;
            report = _closure1_slot16;
            verify = golf.bind(options)(report);
            tango = tango == verify;
            if(tango) { _fun98925_ip = 225; continue _fun98925 }
 181:
            golf = _closure1_slot1;
            options = _closure1_slot3;
            report = 14;
            report = options[report];
            report = golf.bind(entity)(report);
            options = report.bind(entity)();
            golf = options.diff;
            report = 'day';
            report = golf.bind(options)(verify, report);
            tango = report < oscar;
 225:
            if(tango) { _fun98925_ip = 236; continue _fun98925 }
 228:
            _closure1_slot22 = zulu;
 232:
            mike = undefined;
            return mike;
 236:
            return entity;
        }
    };
    var _closure1_slot31 = verify;
    entity = function() { // Original name: handleSelectedGuildChange
        _fun98926: for(var _fun98926_ip = 0; ; ) switch(_fun98926_ip) {
 0:
            zulu = _closure1_slot22;
            entity = null;
            if(!(entity != zulu)) { _fun98926_ip = 46; continue _fun98926 }
 13:
            report = _closure1_slot22;
            tango = _closure1_slot30;
            zulu = undefined;
            tango = tango.bind(zulu)(report);
            zulu = !tango;
            zulu = !zulu;
            if(tango) { _fun98926_ip = 43; continue _fun98926 }
 37:
            _closure1_slot22 = entity;
            zulu = false;
 43:
            if(zulu) { _fun98926_ip = 150; continue _fun98926 }
 46:
            zulu = _closure1_slot21;
            if(!(entity == zulu)) { _fun98926_ip = 56; continue _fun98926 }
 54:
            zulu = {};
 56:
            _closure1_slot21 = zulu;
            zulu = global;
            report = zulu.Object;
            tango = report.values;
            zulu = _closure1_slot21;
            tango = tango.bind(report)(zulu);
            zulu = 0;
            oscar = tango[zulu];
            if(!(entity != oscar)) { _fun98926_ip = 134; continue _fun98926 }
 92:
            zulu = _closure1_slot30;
            report = undefined;
            zulu = zulu.bind(report)(oscar);
            if(!zulu) { _fun98926_ip = 134; continue _fun98926 }
 106:
            tango = _closure1_slot31;
            zulu = {};
            golf = 'SURVEY_FETCHED';
            zulu['type'] = golf;
            zulu['survey'] = oscar;
            zulu = tango.bind(report)(zulu);
            _fun98926_ip = 146; continue _fun98926;
 134:
            zulu = _closure1_slot22;
            if(!(entity != zulu)) { _fun98926_ip = 146; continue _fun98926 }
 142:
            _closure1_slot22 = entity;
 146:
            entity = undefined;
            return entity;
 150:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    mike = global;
    yankee = mike.Object;
    offset = yankee.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 5;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot9 = options;
    options = 6;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot10 = options;
    options = 7;
    offset = oscar[options];
    offset = golf.bind(entity)(offset);
    var _closure1_slot11 = offset;
    offset = 8;
    offset = oscar[offset];
    offset = golf.bind(entity)(offset);
    var _closure1_slot12 = offset;
    offset = 9;
    offset = oscar[offset];
    offset = golf.bind(entity)(offset);
    var _closure1_slot13 = offset;
    offset = 10;
    offset = oscar[offset];
    offset = report.bind(entity)(offset);
    yankee = offset.GuildFeatures;
    var _closure1_slot14 = yankee;
    yankee = offset.Permissions;
    var _closure1_slot15 = yankee;
    offset = offset.FIRST_RUN_DATE_KEY;
    var _closure1_slot16 = offset;
    yankee = {'hiddenSurveys': null, 'surveyOverride': null, 'lastFetched': null, 'lastSeen': null};
    offset = {};
    yankee['hiddenSurveys'] = offset;
    offset = null;
    var _closure1_slot17 = yankee;
    var _closure1_slot18 = yankee;
    yankee = false;
    var _closure1_slot19 = yankee;
    var _closure1_slot20 = yankee;
    yankee = {};
    var _closure1_slot21 = yankee;
    var _closure1_slot22 = offset;
    var _closure1_slot23 = options;
    yankee = {};
    options = 'is_owner';
    yankee['IS_OWNER'] = options;
    options = 'is_admin';
    yankee['IS_ADMIN'] = options;
    options = 'is_community';
    yankee['IS_COMMUNITY'] = options;
    options = 'guild_size';
    yankee['GUILD_SIZE'] = options;
    options = 'is_hub';
    yankee['IS_HUB'] = options;
    options = 'is_viewing';
    yankee['IS_VIEWING'] = options;
    options = 'guild_permissions';
    yankee['GUILD_PERMISSIONS'] = options;
    options = 'guild_size_all';
    yankee['GUILD_SIZE_ALL'] = options;
    var _closure1_slot24 = yankee;
    offset = mike.Set;
    options = mike.Object;
    mike = options.values;
    kilo = mike.bind(options)(yankee);
    options = offset.prototype;
    options = Object.create(options, {constructor: {value: offset}});
    sizing = options;
    mike = new sizing[offset](kilo, backup);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot25 = mike;
    mike = 15;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: SurveyStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot4;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot26;
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
        entity = function(argFoo) { // Original name: value
            _fun98929: for(var _fun98929_ip = 0; ; ) switch(_fun98929_ip) {
 0:
                mike = argFoo;
                tango = this;
                entity = null;
                if(!(entity == mike)) { _fun98929_ip = 19; continue _fun98929 }
 12:
                mike = _closure1_slot17;
 19:
                _closure1_slot18 = mike;
                zulu = tango.syncWith;
                report = _closure1_slot12;
                mike = new Array(1);
                mike[0] = report;
                entity = _closure1_slot32;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(5);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot18;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getCurrentSurvey';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot22;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getSurveyOverride';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot18;
            entity = entity.surveyOverride;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getLastSeenTimestamp';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot18;
            entity = entity.lastSeen;
            return entity;
        };
        report['value'] = oscar;
        entity[4] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'SurveyStore';
    options['displayName'] = mike;
    options['persistKey'] = mike;
    mike = new Array(3);
    offset = function(argFoo) {
        entity = {};
        zulu = argFoo;
        tango = entity;
        mike = copyDataProperties(tango, zulu);
        mike = delete entity.validSurveys;
        mike = delete entity.currentSurvey;
        mike = delete entity.iosIsPushNotificationClicked;
        mike = delete entity.iosIsInviteShown;
        mike = delete entity.iosFirstRunDate;
        return entity;
    };
    mike[0] = offset;
    offset = function(argFoo) {
        _fun98935: for(var _fun98935_ip = 0; ; ) switch(_fun98935_ip) {
 0:
            mike = argFoo;
            entity = {};
            oscar = entity;
            report = mike;
            zulu = copyDataProperties(oscar, report);
            mike = mike.lastSeen;
            zulu = null;
            tango = zulu != mike;
            if(!tango) { _fun98935_ip = 33; continue _fun98935 }
 30:
            zulu = mike;
 33:
            mike = 'lastSeen';
            entity[mike] = zulu;
            return entity;
        }
    };
    mike[1] = offset;
    offset = function(argFoo) {
        _fun98936: for(var _fun98936_ip = 0; ; ) switch(_fun98936_ip) {
 0:
            mike = argFoo;
            entity = {};
            report = entity;
            tango = mike;
            zulu = copyDataProperties(report, tango);
            zulu = mike.hiddenSurveys;
            mike = null;
            if(!(mike == zulu)) { _fun98936_ip = 29; continue _fun98936 }
 27:
            zulu = {};
 29:
            mike = 'hiddenSurveys';
            entity[mike] = zulu;
            return entity;
        }
    };
    mike[2] = offset;
    options['migrations'] = mike;
    mike = 16;
    mike = oscar[mike];
    kilo = golf.bind(entity)(mike);
    mike = {};
    offset = function() { // Original name: fetchSurvey
        _fun98937: for(var _fun98937_ip = 0; ; ) switch(_fun98937_ip) {
 0:
            mike = _closure1_slot18;
            mike = mike.lastFetched;
            tango = null;
            mike = tango != mike;
            if(!mike) { _fun98937_ip = 75; continue _fun98937 }
 22:
            zulu = global;
            report = zulu.Date;
            zulu = report.now;
            report = zulu.bind(report)();
            zulu = _closure1_slot18;
            oscar = zulu.lastFetched;
            golf = tango != oscar;
            zulu = 0;
            if(!golf) { _fun98937_ip = 61; continue _fun98937 }
 58:
            zulu = oscar;
 61:
            report = report - zulu;
            zulu = 86400000;
            mike = report < zulu;
 75:
            if(!mike) { _fun98937_ip = 92; continue _fun98937 }
 78:
            zulu = _closure1_slot18;
            zulu = zulu.surveyOverride;
            mike = tango == zulu;
 92:
            if(mike) { _fun98937_ip = 141; continue _fun98937 }
 95:
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 11;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.surveyFetch;
            entity = _closure1_slot18;
            mike = entity.surveyOverride;
            entity = true;
            entity = zulu.bind(tango)(mike, entity);
 141:
            entity = undefined;
            return entity;
        }
    };
    mike['CONNECTION_OPEN'] = offset;
    mike['SURVEY_FETCHED'] = verify;
    verify = function(argFoo) { // Original name: handleSurveyHide
        _fun98938: for(var _fun98938_ip = 0; ; ) switch(_fun98938_ip) {
 0:
            entity = argFoo;
            mike = entity.key;
            entity = _closure1_slot18;
            tango = entity.hiddenSurveys;
            entity = true;
            tango[mike] = entity;
            tango = null;
            _closure1_slot22 = tango;
            entity = _closure1_slot21;
            if(!(tango == entity)) { _fun98938_ip = 43; continue _fun98938 }
 41:
            entity = {};
 43:
            _closure1_slot21 = entity;
            entity = delete entity[mike];
            entity = undefined;
            return entity;
        }
    };
    mike['SURVEY_HIDE'] = verify;
    verify = function(argFoo) { // Original name: handleSurveyOverride
        _fun98939: for(var _fun98939_ip = 0; ; ) switch(_fun98939_ip) {
 0:
            entity = argFoo;
            zulu = entity.id;
            entity = _closure1_slot18;
            entity['surveyOverride'] = zulu;
            entity = null;
            if(!(entity != zulu)) { _fun98939_ip = 41; continue _fun98939 }
 27:
            entity = _closure1_slot18;
            entity = entity.hiddenSurveys;
            entity = delete entity[zulu];
 41:
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            entity = 11;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.surveyFetch;
            mike = _closure1_slot18;
            zulu = mike.surveyOverride;
            mike = true;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    mike['SURVEY_OVERRIDE'] = verify;
    verify = function() { // Original name: handlePushNotificationClick
        entity = true;
        _closure1_slot19 = entity;
        entity = undefined;
        return entity;
    };
    mike['PUSH_NOTIFICATION_CLICK'] = verify;
    verify = function() { // Original name: handleInviteShow
        entity = true;
        _closure1_slot20 = entity;
        entity = undefined;
        return entity;
    };
    mike['DISPLAYED_INVITE_SHOW'] = verify;
    verify = function() { // Original name: handleLogout
        mike = _closure1_slot18;
        entity = {};
        mike['hiddenSurveys'] = entity;
        entity = undefined;
        return entity;
    };
    mike['LOGOUT'] = verify;
    tango = function() { // Original name: handleSurveySeen
        mike = _closure1_slot18;
        entity = global;
        zulu = entity.Date;
        entity = zulu.now;
        entity = entity.bind(zulu)();
        mike['lastSeen'] = entity;
        entity = undefined;
        return entity;
    };
    mike['SURVEY_SEEN'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    sizing = tango;
    backup = mike;
    mike = new sizing[options](kilo, backup, foxtrot);
    mike = mike instanceof Object ? mike : tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/SurveyStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    mike = 86400000;
    zulu['SURVEY_REFETCH_INTERVAL'] = mike;
    return entity;
})();