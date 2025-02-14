// app/modules/message_previews/MessagePreviewManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun97416: for(var _fun97416_ip = 0; ; ) switch(_fun97416_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun97416_ip = 46; continue _fun97416 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun97416_ip = 55; continue _fun97416 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun97416_ip = 345; continue _fun97416 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun97416_ip = 323; continue _fun97416 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun97416_ip = 283; continue _fun97416 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun97416_ip = 270; continue _fun97416 }
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
            if(!golf) { _fun97416_ip = 163; continue _fun97416 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun97416_ip = 179; continue _fun97416 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun97416_ip = 249; continue _fun97416 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun97416_ip = 249; continue _fun97416 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun97416_ip = 234; continue _fun97416 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun97416_ip = 247; continue _fun97416 }
 234:
            verify = _closure1_slot18;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun97416_ip = 265; continue _fun97416;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun97416_ip = 283; continue _fun97416;
 270:
            golf = _closure1_slot18;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun97416_ip = 323; continue _fun97416 }
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
            if(!tango) { _fun97416_ip = 330; continue _fun97416 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun97417: for(var _fun97417_ip = 0; ; ) switch(_fun97417_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun97417_ip = 56; continue _fun97417 }
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
                    _fun97417_ip = 67; continue _fun97417;
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
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun97418: for(var _fun97418_ip = 0; ; ) switch(_fun97418_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun97418_ip = 23; continue _fun97418 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun97418_ip = 33; continue _fun97418 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun97418_ip = 70; continue _fun97418 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun97418_ip = 55; continue _fun97418 }
 70:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun97419: for(var _fun97419_ip = 0; ; ) switch(_fun97419_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot8;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot7;
            entity = _closure1_slot20;
            entity = entity.bind(zulu)();
            if(entity) { _fun97419_ip = 51; continue _fun97419 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun97419_ip = 92; continue _fun97419;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun97419_ip = 71; continue _fun97419 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot8;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun97420: for(var _fun97420_ip = 0; ; ) switch(_fun97420_ip) {
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
            _fun97420_ip = 76; continue _fun97420;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot20 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.isThread;
    var _closure1_slot11 = tango;
    tango = 9;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 10;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 11;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 12;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot15 = tango;
    tango = 13;
    tango = golf[tango];
    verify = report.bind(entity)(tango);
    tango = verify.prototype;
    options = Object.create(tango, {constructor: {value: verify}});
    romeo = 'MessagePreviewManager';
    foxtrot = options;
    tango = new foxtrot[verify](romeo, yankee);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot16 = tango;
    tango = 19;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: MessagePreviewManager
            golf = this;
            romeo = 0;
            options = copyRestArgs(romeo);
            entity = _closure1_slot5;
            report = _closure2_slot1;
            oscar = undefined;
            entity = entity.bind(oscar)(golf, report);
            tango = _closure1_slot19;
            entity = new Array(0);
            romeo = entity;
            yankee = options;
            offset = 0;
            options = arraySpread(romeo, yankee, offset);
            entity = tango.bind(oscar)(golf, report, entity);
            var _closure3_slot0 = entity;
            tango = global;
            report = tango.Map;
            golf = report.prototype;
            golf = Object.create(golf, {constructor: {value: report}});
            foxtrot = golf;
            report = new foxtrot[report](romeo);
            report = report instanceof Object ? report : golf;
            entity['remote'] = report;
            report = false;
            entity['remoteTicking'] = report;
            entity['tickQueued'] = report;
            tango = tango.Set;
            report = tango.prototype;
            report = Object.create(report, {constructor: {value: tango}});
            foxtrot = report;
            tango = new foxtrot[tango](romeo);
            tango = tango instanceof Object ? tango : report;
            entity['localFetching'] = tango;
            tango = {};
            report = function() { // Original name: CONNECTION_OPEN_SUPPLEMENTAL
                mike = _closure3_slot0;
                entity = mike.handleConnectionResumed;
                entity = entity.bind(mike)();
                return entity;
            };
            tango['CONNECTION_OPEN_SUPPLEMENTAL'] = report;
            report = function() { // Original name: CONNECTION_RESUMED
                mike = _closure3_slot0;
                entity = mike.handleConnectionResumed;
                entity = entity.bind(mike)();
                return entity;
            };
            tango['CONNECTION_RESUMED'] = report;
            report = function(argFoo) { // Original name: GUILD_CREATE
                zulu = _closure3_slot0;
                mike = zulu.handleGuildCreate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango['GUILD_CREATE'] = report;
            report = function(argFoo) { // Original name: GUILD_DELETE
                zulu = _closure3_slot0;
                mike = zulu.handleGuildDelete;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango['GUILD_DELETE'] = report;
            report = function(argFoo) { // Original name: LOAD_MESSAGES_SUCCESS
                zulu = _closure3_slot0;
                mike = zulu.handleMessagesLoaded;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango['LOAD_MESSAGES_SUCCESS'] = report;
            report = function(argFoo) { // Original name: LOCAL_MESSAGES_LOADED
                zulu = _closure3_slot0;
                mike = zulu.handleMessagesLoaded;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango['LOCAL_MESSAGES_LOADED'] = report;
            report = function() { // Original name: LOGOUT
                mike = _closure3_slot0;
                entity = mike.handleLogout;
                entity = entity.bind(mike)();
                return entity;
            };
            tango['LOGOUT'] = report;
            report = function(argFoo) { // Original name: MESSAGE_CREATE
                zulu = _closure3_slot0;
                mike = zulu.handleMessageCreate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango['MESSAGE_CREATE'] = report;
            report = function(argFoo) { // Original name: MESSAGE_DELETE
                zulu = _closure3_slot0;
                mike = zulu.handleMessageDelete;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango['MESSAGE_DELETE'] = report;
            report = function(argFoo) { // Original name: MESSAGE_UPDATE
                zulu = _closure3_slot0;
                mike = zulu.handleMessageUpdate;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango['MESSAGE_UPDATE'] = report;
            report = function(argFoo) { // Original name: THREAD_LIST_SYNC
                zulu = _closure3_slot0;
                mike = zulu.handleThreadListSync;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango['THREAD_LIST_SYNC'] = report;
            entity['actions'] = tango;
            report = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 14;
            tango = golf[tango];
            report = report.bind(oscar)(tango);
            tango = report.debounce;
            zulu = _closure1_slot4;
            mike = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun97437: for(var _fun97437_ip = 0; ; ) switch(_fun97437_ip) {
 0:
                        StartGenerator();
                        mike = arguments[0];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun97437_ip = 401; continue _fun97437 }
 13:
                        zulu = undefined;
                        if(!(mike === zulu)) { _fun97437_ip = 21; continue _fun97437 }
 19:
                        mike = 0;
 21:
                        oscar = mike;
                        backup = undefined;
                        kilo = undefined;
                        sizing = undefined;
                        output = undefined;
                        SaveGenerator(address=36);
 34:
                        return zulu;
 36:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun97437_ip = 398; continue _fun97437 }
 45:
                        report = _closure1_slot10;
                        tango = report.isConnected;
                        options = tango.bind(report)();
                        tango = _closure3_slot0;
                        if(options) { _fun97437_ip = 85; continue _fun97437 }
 72:
                        options = true;
                        tango['tickQueued'] = options;
                        _fun97437_ip = 395; continue _fun97437;
 85:
                        tango = tango.remoteTicking;
                        if(tango) { _fun97437_ip = 395; continue _fun97437 }
 97:
                        options = oscar;
                        tango = 5;
                        if(!(!(options > tango))) { _fun97437_ip = 395; continue _fun97437 }
 110:
                        options = _closure3_slot0;
                        tango = false;
                        options['tickQueued'] = tango;
 122: // try_start_0
                        options = _closure3_slot0;
                        verify = true;
                        options['remoteTicking'] = verify;
                        verify = _closure1_slot17;
                        options = options.remote;
                        options = verify.bind(zulu)(options);
                        kilo = options;
                        options = options.bind(zulu)();
                        backup = options;
                        options = options.done;
                        foxtrot = 2;
                        romeo = 0;
                        yankee = 1;
                        offset = null;
                        if(options) { _fun97437_ip = 289; continue _fun97437 }
 177:
                        options = backup;
                        verify = options.value;
                        options = _closure1_slot3;
                        verify = options.bind(zulu)(verify, foxtrot);
                        options = verify[romeo];
                        sizing = options;
                        output = verify[yankee];
                        if(!(offset != options)) { _fun97437_ip = 236; continue _fun97437 }
 210:
                        echo = _closure3_slot0;
                        result = echo.fetchGuilds;
                        verify = sizing;
                        options = output;
                        options = result.bind(echo)(verify, options);
                        _fun97437_ip = 256; continue _fun97437;
 236:
                        echo = _closure3_slot0;
                        result = echo.fetchDms;
                        verify = output;
                        options = result.bind(echo)(verify);
 256:
                        SaveGenerator(address=260);
 258:
                        return options;
 260:
                        ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                        if(verify) { _fun97437_ip = 286; continue _fun97437 }
 266:
                        verify = kilo;
                        verify = verify.bind(zulu)();
                        backup = verify;
                        verify = verify.done;
                        if(verify) { _fun97437_ip = 289; continue _fun97437 }
 284:
                        _fun97437_ip = 177; continue _fun97437;
 286: // try_end0
                        return options;
 289: // try_start_1
                        options = _closure3_slot0;
                        verify = options.cleanup;
                        verify = verify.bind(options)();
                        options['remoteTicking'] = tango;
 309: // try_end1
                        _fun97437_ip = 395; continue _fun97437;
 311: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=20);
                        verify = _closure1_slot16;
                        options = verify.log;
                        golf = oscar;
                        oscar = global;
                        oscar = oscar.HermesInternal;
                        romeo = oscar.concat;
                        sequence = "couldn't fetch message previews (attempt: ";
                        control = ', error: ';
                        update = ')';
                        vacuum = golf;
                        oscar = sequence[romeo](vacuum, control, source, update, echo);
                        oscar = options.bind(verify)(oscar);
                        oscar = _closure3_slot0;
                        oscar['remoteTicking'] = tango;
                        report = oscar.remoteTick;
                        tango = 1;
                        tango = golf + tango;
                        tango = report.bind(oscar)(tango);
 395:
                        return zulu;
 398:
                        return mike;
 401:
                        return entity;
                    }
                };
                mike = entity.next;
                mike = mike.bind(entity)();
                return entity;
            };
            zulu = zulu.bind(oscar)(mike);
            mike = 100;
            mike = tango.bind(report)(zulu, mike);
            entity['remoteTick'] = mike;
            return entity;
        };
        var _closure2_slot1 = tango;
        mike = _closure1_slot9;
        zulu = undefined;
        entity = argFoo;
        entity = mike.bind(zulu)(tango, entity);
        mike = _closure1_slot6;
        report = {};
        entity = 'addWant';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun97438: for(var _fun97438_ip = 0; ; ) switch(_fun97438_ip) {
 0:
                report = argFoo;
                mike = this;
                zulu = _closure1_slot13;
                entity = zulu.getBasicChannel;
                entity = entity.bind(zulu)(report);
                zulu = null;
                if(!(zulu != entity)) { _fun97438_ip = 130; continue _fun97438 }
 30:
                oscar = entity.guild_id;
                golf = zulu != oscar;
                zulu = null;
                if(!golf) { _fun97438_ip = 47; continue _fun97438 }
 44:
                zulu = oscar;
 47:
                golf = _closure1_slot11;
                oscar = entity.type;
                entity = undefined;
                entity = golf.bind(entity)(oscar);
                if(entity) { _fun97438_ip = 82; continue _fun97438 }
 66:
                oscar = _closure1_slot14;
                tango = oscar.isLatest;
                entity = tango.bind(oscar)(zulu, report);
 82:
                if(entity) { _fun97438_ip = 130; continue _fun97438 }
 85:
                entity = mike.getOrCreate;
                tango = entity.bind(mike)(zulu);
                entity = tango.addWant;
                entity = entity.bind(tango)(report);
                entity = mike.fetchLocal;
                entity = entity.bind(mike)(zulu);
                entity = mike.remoteTick;
                entity = entity.bind(mike)();
 130:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(16);
        entity[0] = report;
        report = {};
        options = 'fetchLocal';
        report['key'] = options;
        options = _closure1_slot4;
        golf = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun97440: for(var _fun97440_ip = 0; ; ) switch(_fun97440_ip) {
 0:
                    StartGenerator();
                    yankee = argFoo;
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun97440_ip = 455; continue _fun97440 }
 16:
                    tango = yankee;
                    mike = undefined;
                    golf = undefined;
                    options = undefined;
                    offset = undefined;
                    verify = _closure1_slot14;
                    oscar = verify.isLocalFetchNeeded;
                    oscar = oscar.bind(verify)(yankee);
                    if(!oscar) { _fun97440_ip = 452; continue _fun97440 }
 53:
                    yankee = report.localFetching;
                    verify = yankee.has;
                    oscar = tango;
                    oscar = verify.bind(yankee)(oscar);
                    if(oscar) { _fun97440_ip = 452; continue _fun97440 }
 78: // try_start_0 // try_start_1
                    romeo = _closure1_slot16;
                    verify = romeo.verbose;
                    yankee = tango;
                    oscar = global;
                    oscar = oscar.HermesInternal;
                    backup = oscar.concat;
                    foxtrot = 'fetching local previews (via: database, guild_id: ';
                    oscar = ')';
                    oscar = backup.bind(foxtrot)(yankee, oscar);
                    oscar = verify.bind(romeo)(oscar);
                    verify = report.localFetching;
                    oscar = verify.add;
                    oscar = oscar.bind(verify)(yankee);
                    verify = _closure1_slot12;
                    oscar = verify.getId;
                    options = oscar.bind(verify)();
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    oscar = 15;
                    oscar = yankee[oscar];
                    verify = verify.bind(mike)(oscar);
                    oscar = verify.messages;
                    oscar = oscar.bind(verify)();
                    golf = oscar;
                    verify = null;
                    yankee = verify == oscar;
                    oscar = undefined;
                    if(yankee) { _fun97440_ip = 218; continue _fun97440 }
 199:
                    romeo = golf;
                    yankee = romeo.getMostRecents;
                    golf = tango;
                    oscar = yankee.bind(romeo)(golf);
 218:
                    SaveGenerator(address=222);
 220:
                    return oscar;
 222:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golf) { _fun97440_ip = 343; continue _fun97440 }
 228:
                    offset = oscar;
                    verify = verify != oscar;
                    golf = verify;
                    if(!verify) { _fun97440_ip = 262; continue _fun97440 }
 241:
                    verify = options;
                    yankee = _closure1_slot12;
                    options = yankee.getId;
                    options = options.bind(yankee)();
                    golf = verify === options;
 262:
                    if(!golf) { _fun97440_ip = 341; continue _fun97440 }
 265:
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    golf = 16;
                    golf = verify[golf];
                    verify = options.bind(mike)(golf);
                    options = verify.dispatch;
                    golf = {};
                    yankee = 'MESSAGE_PREVIEWS_LOCALLY_LOADED';
                    golf['type'] = yankee;
                    yankee = tango;
                    golf['guildId'] = yankee;
                    romeo = offset;
                    yankee = romeo.map;
                    offset = function(argFoo) {
                        _fun97441: for(var _fun97441_ip = 0; ; ) switch(_fun97441_ip) {
 0:
                            report = argFoo;
                            entity = report[Symbol.iterator];
                            report = entity().next;
                            mike = report().value;
                            zulu = entity;
                            golf = undefined;
                            tango = zulu === golf;
                            zulu = undefined;
                            if(tango) { _fun97441_ip = 27; continue _fun97441 }
 24:
                            zulu = mike;
 27:
                            mike = undefined;
                            if(tango) { _fun97441_ip = 57; continue _fun97441 }
 32:
                            oscar = report().value;
                            report = entity;
                            report = report === golf;
                            mike = undefined;
                            tango = report;
                            if(report) { _fun97441_ip = 57; continue _fun97441 }
 51:
                            mike = oscar;
                            tango = report;
 57:
                            if(tango) { _fun97441_ip = 63; continue _fun97441 }
 60:
                            entity.return();
 63:
                            entity = new Array(2);
                            entity[0] = zulu;
                            mike = mike.message;
                            entity[1] = mike;
                            return entity;
                        }
                    };
                    offset = yankee.bind(romeo)(offset);
                    golf['messages'] = offset;
                    golf = options.bind(verify)(golf);
 341: // try_end0
                    _fun97440_ip = 411; continue _fun97440;
 343: // try_end1
                    verify = report.localFetching;
                    options = verify.delete;
                    golf = tango;
                    golf = options.bind(verify)(golf);
                    return oscar;
 365: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=9);
                    golf = _closure1_slot16;
                    oscar = golf.log;
                    zulu = global;
                    zulu = zulu.HermesInternal;
                    verify = zulu.concat;
                    options = "couldn't fetch local previews (error: ";
                    zulu = ')';
                    zulu = verify.bind(options)(offset, zulu);
                    zulu = oscar.bind(golf)(zulu);
 411: // try_end2
                    golf = report.localFetching;
                    oscar = golf.delete;
                    zulu = tango;
                    zulu = oscar.bind(golf)(zulu);
                    _fun97440_ip = 452; continue _fun97440;
 432: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=2);
                    oscar = report.localFetching;
                    report = oscar.delete;
                    tango = report.bind(oscar)(tango);
                    throw zulu;
 452:
                    return mike;
 455:
                    return entity;
                }
            };
            return entity;
        };
        golf = options.bind(zulu)(golf);
        var _closure2_slot0 = golf;
        golf = function() { // Original name: fetchLocal
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'fetchGuilds';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun97443: for(var _fun97443_ip = 0; ; ) switch(_fun97443_ip) {
 0:
                tango = argBar;
                mike = argFoo;
                var _closure3_slot0 = mike;
                zulu = tango.nextWants;
                mike = 1000;
                zulu = zulu.bind(tango)(mike);
                var _closure3_slot1 = zulu;
                report = zulu.length;
                mike = 0;
                if(!(mike !== report)) { _fun97443_ip = 65; continue _fun97443 }
 44:
                mike = tango.try;
                entity = function() {
                    golf = _closure1_slot16;
                    oscar = golf.verbose;
                    report = _closure3_slot0;
                    tango = _closure3_slot1;
                    zulu = tango.join;
                    entity = ', ';
                    foxtrot = zulu.bind(tango)(entity);
                    entity = global;
                    zulu = entity.HermesInternal;
                    offset = zulu.concat;
                    sizing = 'fetching guild previews (via: gateway, guild_id: ';
                    backup = ', channel_ids: ';
                    romeo = ')';
                    kilo = report;
                    zulu = sizing[offset](kilo, backup, foxtrot, romeo, yankee);
                    zulu = oscar.bind(golf)(zulu);
                    zulu = _closure1_slot10;
                    mike = zulu.getSocket;
                    zulu = mike.bind(zulu)();
                    mike = zulu.requestLastMessages;
                    mike = mike.bind(zulu)(report, tango);
                    mike = entity.Promise;
                    entity = mike.resolve;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = mike.bind(tango)(zulu, entity);
                _fun97443_ip = 83; continue _fun97443;
 65:
                mike = global;
                zulu = mike.Promise;
                mike = zulu.resolve;
                entity = mike.bind(zulu)();
 83:
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'fetchDms';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun97445: for(var _fun97445_ip = 0; ; ) switch(_fun97445_ip) {
 0:
                tango = argFoo;
                zulu = tango.nextWants;
                mike = 30;
                zulu = zulu.bind(tango)(mike);
                var _closure3_slot0 = zulu;
                report = zulu.length;
                mike = 0;
                if(!(mike !== report)) { _fun97445_ip = 69; continue _fun97445 }
 34:
                mike = tango.try;
                oscar = _closure1_slot4;
                report = undefined;
                entity = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun97447: for(var _fun97447_ip = 0; ; ) switch(_fun97447_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun97447_ip = 217; continue _fun97447 }
 10:
                            report = _closure1_slot16;
                            zulu = report.verbose;
                            options = _closure3_slot0;
                            oscar = options.join;
                            mike = ', ';
                            verify = oscar.bind(options)(mike);
                            mike = global;
                            mike = mike.HermesInternal;
                            golf = mike.concat;
                            oscar = 'fetching dm previews (via: http, channel_ids: ';
                            mike = ')';
                            mike = golf.bind(oscar)(verify, mike);
                            mike = zulu.bind(report)(mike);
                            report = _closure1_slot0;
                            zulu = _closure1_slot2;
                            mike = 17;
                            mike = zulu[mike];
                            zulu = undefined;
                            mike = report.bind(zulu)(mike);
                            oscar = mike.HTTP;
                            report = oscar.post;
                            mike = {};
                            golf = _closure1_slot15;
                            golf = golf.MESSAGE_PREVIEWS;
                            mike['url'] = golf;
                            golf = {};
                            golf['channel_ids'] = options;
                            mike['body'] = golf;
                            golf = false;
                            mike['rejectWithError'] = golf;
                            mike = report.bind(oscar)(mike);
                            SaveGenerator(address=155);
 153:
                            return mike;
 155:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(report) { _fun97447_ip = 214; continue _fun97447 }
 161:
                            golf = mike.body;
                            report = _closure1_slot1;
                            oscar = _closure1_slot2;
                            tango = 16;
                            tango = oscar[tango];
                            oscar = report.bind(zulu)(tango);
                            report = oscar.dispatch;
                            tango = {'type': 'MESSAGE_PREVIEWS_LOADED', 'guildId': null};
                            tango['messages'] = golf;
                            tango = report.bind(oscar)(tango);
                            return zulu;
 214:
                            return mike;
 217:
                            return entity;
                        }
                    };
                    return entity;
                };
                entity = oscar.bind(report)(entity);
                entity = mike.bind(tango)(zulu, entity);
                _fun97445_ip = 87; continue _fun97445;
 69:
                mike = global;
                zulu = mike.Promise;
                mike = zulu.resolve;
                entity = mike.bind(zulu)();
 87:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'syncChannel';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun97448: for(var _fun97448_ip = 0; ; ) switch(_fun97448_ip) {
 0:
                oscar = argFoo;
                zulu = argBar;
                entity = this;
                mike = entity.remote;
                entity = mike.get;
                mike = entity.bind(mike)(oscar);
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun97448_ip = 53; continue _fun97448 }
 34:
                report = _closure1_slot14;
                tango = report.isLatest;
                entity = tango.bind(report)(oscar, zulu);
 53:
                if(!entity) { _fun97448_ip = 67; continue _fun97448 }
 56:
                entity = mike.removeWant;
                entity = entity.bind(mike)(zulu);
 67:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getOrCreate';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun97449: for(var _fun97449_ip = 0; ; ) switch(_fun97449_ip) {
 0:
                zulu = argFoo;
                entity = this;
                tango = entity.remote;
                mike = tango.has;
                mike = mike.bind(tango)(zulu);
                if(mike) { _fun97449_ip = 93; continue _fun97449 }
 25:
                report = entity.remote;
                tango = report.set;
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 18;
                oscar = oscar[mike];
                mike = undefined;
                mike = golf.bind(mike)(oscar);
                mike = mike.RemoteFetchData;
                oscar = mike.prototype;
                oscar = Object.create(oscar, {constructor: {value: mike}});
                offset = oscar;
                mike = new offset[mike](verify);
                mike = mike instanceof Object ? mike : oscar;
                mike = tango.bind(report)(zulu, mike);
 93:
                mike = entity.remote;
                entity = mike.get;
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'cleanup';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun97450: for(var _fun97450_ip = 0; ; ) switch(_fun97450_ip) {
 0:
                verify = this;
                zulu = _closure1_slot17;
                mike = verify.remote;
                entity = undefined;
                golf = zulu.bind(entity)(mike);
                zulu = golf.bind(entity)();
                mike = zulu.done;
                oscar = 2;
                report = 0;
                tango = 1;
                if(mike) { _fun97450_ip = 110; continue _fun97450 }
 43:
                offset = zulu.value;
                mike = _closure1_slot3;
                mike = mike.bind(entity)(offset, oscar);
                yankee = mike[report];
                offset = mike[tango];
                mike = offset.empty;
                mike = mike.bind(offset)();
                if(!mike) { _fun97450_ip = 95; continue _fun97450 }
 79:
                offset = verify.remote;
                mike = offset.delete;
                mike = mike.bind(offset)(yankee);
 95:
                offset = golf.bind(entity)();
                mike = offset.done;
                zulu = offset;
                if(!mike) { _fun97450_ip = 43; continue _fun97450 }
 110:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'handleConnectionResumed';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun97451: for(var _fun97451_ip = 0; ; ) switch(_fun97451_ip) {
 0:
                mike = this;
                entity = mike.tickQueued;
                if(!entity) { _fun97451_ip = 49; continue _fun97451 }
 12:
                entity = mike.remoteTicking;
                if(entity) { _fun97451_ip = 49; continue _fun97451 }
 21:
                entity = mike.remoteTick;
                entity = entity.bind(mike)();
                zulu = mike.remoteTick;
                entity = zulu.flush;
                entity = entity.bind(zulu)();
                _fun97451_ip = 89; continue _fun97451;
 49:
                zulu = mike.localFetching;
                entity = zulu.clear;
                entity = entity.bind(zulu)();
                zulu = mike.remote;
                entity = zulu.clear;
                entity = entity.bind(zulu)();
                entity = false;
                mike['remoteTicking'] = entity;
 89:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'handleGuildCreate';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.remote;
            mike = zulu.delete;
            entity = argFoo;
            entity = entity.guild;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'handleGuildDelete';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.remote;
            mike = zulu.delete;
            entity = argFoo;
            entity = entity.guild;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'handleLogout';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = this;
            zulu = mike.localFetching;
            entity = zulu.clear;
            entity = entity.bind(zulu)();
            zulu = mike.remote;
            entity = zulu.clear;
            entity = entity.bind(zulu)();
            entity = false;
            mike['remoteTicking'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'handleMessageCreate';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun97455: for(var _fun97455_ip = 0; ; ) switch(_fun97455_ip) {
 0:
                entity = argFoo;
                tango = this;
                zulu = tango.syncChannel;
                report = entity.guildId;
                mike = null;
                oscar = mike != report;
                if(!oscar) { _fun97455_ip = 29; continue _fun97455 }
 26:
                mike = report;
 29:
                entity = entity.channelId;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'handleMessageDelete';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun97456: for(var _fun97456_ip = 0; ; ) switch(_fun97456_ip) {
 0:
                entity = argFoo;
                tango = this;
                zulu = tango.syncChannel;
                report = entity.guildId;
                mike = null;
                oscar = mike != report;
                if(!oscar) { _fun97456_ip = 29; continue _fun97456 }
 26:
                mike = report;
 29:
                entity = entity.channelId;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'handleMessageUpdate';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun97457: for(var _fun97457_ip = 0; ; ) switch(_fun97457_ip) {
 0:
                entity = argFoo;
                tango = this;
                mike = entity.message;
                mike = mike.channel_id;
                zulu = null;
                if(!(zulu != mike)) { _fun97457_ip = 61; continue _fun97457 }
 22:
                mike = tango.syncChannel;
                report = entity.guildId;
                oscar = zulu != report;
                zulu = null;
                if(!oscar) { _fun97457_ip = 45; continue _fun97457 }
 42:
                zulu = report;
 45:
                entity = entity.message;
                entity = entity.channel_id;
                entity = mike.bind(tango)(zulu, entity);
 61:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'handleMessagesLoaded';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun97458: for(var _fun97458_ip = 0; ; ) switch(_fun97458_ip) {
 0:
                mike = argFoo;
                oscar = this;
                report = _closure1_slot13;
                tango = report.getBasicChannel;
                entity = mike.channelId;
                golf = tango.bind(report)(entity);
                tango = null;
                report = tango == golf;
                entity = undefined;
                options = undefined;
                if(report) { _fun97458_ip = 47; continue _fun97458 }
 42:
                options = golf.guild_id;
 47:
                verify = tango != options;
                report = null;
                if(!verify) { _fun97458_ip = 59; continue _fun97458 }
 56:
                report = options;
 59:
                if(!(tango != golf)) { _fun97458_ip = 135; continue _fun97458 }
 63:
                zulu = _closure1_slot17;
                mike = mike.messages;
                if(!(tango == mike)) { _fun97458_ip = 81; continue _fun97458 }
 77:
                mike = new Array(0);
 81:
                tango = zulu.bind(entity)(mike);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun97458_ip = 135; continue _fun97458 }
 98:
                mike = zulu.value;
                golf = oscar.syncChannel;
                mike = mike.channel_id;
                mike = golf.bind(oscar)(report, mike);
                golf = tango.bind(entity)();
                mike = golf.done;
                zulu = golf;
                if(!mike) { _fun97458_ip = 98; continue _fun97458 }
 135:
                return entity;
            }
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'handleThreadListSync';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun97459: for(var _fun97459_ip = 0; ; ) switch(_fun97459_ip) {
 0:
                entity = argFoo;
                mike = this;
                tango = mike.remote;
                zulu = tango.get;
                mike = entity.guildId;
                report = zulu.bind(tango)(mike);
                zulu = null;
                if(!(zulu != report)) { _fun97459_ip = 109; continue _fun97459 }
 33:
                mike = _closure1_slot17;
                entity = entity.mostRecentMessages;
                if(!(zulu == entity)) { _fun97459_ip = 54; continue _fun97459 }
 50:
                entity = new Array(0);
 54:
                tango = undefined;
                zulu = mike.bind(tango)(entity);
                mike = zulu.bind(tango)();
                entity = mike.done;
                if(entity) { _fun97459_ip = 109; continue _fun97459 }
 73:
                entity = mike.value;
                oscar = report.removeWant;
                entity = entity.channel_id;
                entity = oscar.bind(report)(entity);
                oscar = zulu.bind(tango)();
                entity = oscar.done;
                mike = oscar;
                if(!entity) { _fun97459_ip = 73; continue _fun97459 }
 109:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[15] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    report = Object.create(tango, {constructor: {value: mike}});
    foxtrot = report;
    tango = new foxtrot[mike](romeo);
    tango = tango instanceof Object ? tango : report;
    report = 20;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/message_previews/MessagePreviewManager.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['MessagePreviewManager'] = mike;
    return entity;
})();