// app/modules/share/formatResults.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun85941: for(var _fun85941_ip = 0; ; ) switch(_fun85941_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun85941_ip = 46; continue _fun85941 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun85941_ip = 55; continue _fun85941 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun85941_ip = 345; continue _fun85941 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun85941_ip = 323; continue _fun85941 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun85941_ip = 283; continue _fun85941 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun85941_ip = 270; continue _fun85941 }
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
            if(!golf) { _fun85941_ip = 163; continue _fun85941 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun85941_ip = 179; continue _fun85941 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun85941_ip = 249; continue _fun85941 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun85941_ip = 249; continue _fun85941 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun85941_ip = 234; continue _fun85941 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun85941_ip = 247; continue _fun85941 }
 234:
            verify = _closure1_slot12;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun85941_ip = 265; continue _fun85941;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun85941_ip = 283; continue _fun85941;
 270:
            golf = _closure1_slot12;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun85941_ip = 323; continue _fun85941 }
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
            if(!tango) { _fun85941_ip = 330; continue _fun85941 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun85942: for(var _fun85942_ip = 0; ; ) switch(_fun85942_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun85942_ip = 56; continue _fun85942 }
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
                    _fun85942_ip = 67; continue _fun85942;
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
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun85943: for(var _fun85943_ip = 0; ; ) switch(_fun85943_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun85943_ip = 23; continue _fun85943 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun85943_ip = 33; continue _fun85943 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun85943_ip = 70; continue _fun85943 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun85943_ip = 55; continue _fun85943 }
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    tango = function(argFoo) { // Original name: getChannelIdFromDestinationId
        _fun85944: for(var _fun85944_ip = 0; ; ) switch(_fun85944_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            mike = 'channel';
            if(!(mike !== zulu)) { _fun85944_ip = 55; continue _fun85944 }
 16:
            tango = _closure1_slot5;
            zulu = tango.getDMFromUserId;
            mike = entity.id;
            zulu = zulu.bind(tango)(mike);
            mike = null;
            tango = mike != zulu;
            mike = undefined;
            if(!tango) { _fun85944_ip = 53; continue _fun85944 }
 50:
            mike = zulu;
 53:
            return mike;
 55:
            entity = entity.id;
            return entity;
        }
    };
    var _closure1_slot13 = tango;
    entity = function() { // Original name: _getOrResolveChannelIdFromDestinationId
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun85947: for(var _fun85947_ip = 0; ; ) switch(_fun85947_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun85947_ip = 112; continue _fun85947 }
 10:
                    tango = oscar;
                    mike = _closure1_slot13;
                    zulu = undefined;
                    mike = mike.bind(zulu)(oscar);
                    oscar = null;
                    if(!(oscar == mike)) { _fun85947_ip = 109; continue _fun85947 }
 33:
                    oscar = tango;
                    golf = oscar.type;
                    oscar = 'user';
                    if(!(oscar !== golf)) { _fun85947_ip = 52; continue _fun85947 }
 49:
                    return zulu;
 52: // try_start_0
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 7;
                    report = golf[report];
                    oscar = oscar.bind(zulu)(report);
                    report = oscar.getOrEnsurePrivateChannel;
                    tango = tango.id;
                    tango = report.bind(oscar)(tango);
                    SaveGenerator(address=92);
 90:
                    return tango;
 92:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun85947_ip = 101; continue _fun85947 }
 98: // try_end0
                    return tango;
 101:
                    return tango;
 104: // catch_target0
                    CatchBlockStart(arg_register=3);
                    return zulu;
 109:
                    return mike;
 112:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot14 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: createAutocompleterResultForDestination
        _fun85948: for(var _fun85948_ip = 0; ; ) switch(_fun85948_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            mike = 'user';
            if(!(mike !== zulu)) { _fun85948_ip = 53; continue _fun85948 }
 16:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 9;
            mike = tango[mike];
            tango = undefined;
            zulu = zulu.bind(tango)(mike);
            mike = entity.id;
            mike = zulu.bind(tango)(mike);
            return mike;
 53:
            zulu = _closure1_slot7;
            mike = zulu.getUser;
            entity = entity.id;
            zulu = mike.bind(zulu)(entity);
            entity = null;
            mike = entity != zulu;
            if(!mike) { _fun85948_ip = 140; continue _fun85948 }
 85:
            mike = {};
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 8;
            report = report[tango];
            tango = undefined;
            tango = oscar.bind(tango)(report);
            tango = tango.AutocompleterResultTypes;
            tango = tango.USER;
            mike['type'] = tango;
            mike['record'] = zulu;
            zulu = 0;
            mike['score'] = zulu;
            entity = mike;
 140:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: mergeAndDedupeResultsWithHeaders
        _fun85949: for(var _fun85949_ip = 0; ; ) switch(_fun85949_ip) {
 0:
            mike = argBar;
            entity = global;
            entity = entity.Set;
            zulu = entity.prototype;
            zulu = Object.create(zulu, {constructor: {value: entity}});
            result = zulu;
            entity = new result[entity](output);
            yankee = entity instanceof Object ? entity : zulu;
            offset = null;
            if(!(offset != mike)) { _fun85949_ip = 93; continue _fun85949 }
 37:
            entity = _closure1_slot11;
            tango = undefined;
            zulu = entity.bind(tango)(mike);
            mike = zulu.bind(tango)();
            entity = mike.done;
            if(entity) { _fun85949_ip = 93; continue _fun85949 }
 63:
            report = mike.value;
            entity = yankee.add;
            entity = entity.bind(yankee)(report);
            report = zulu.bind(tango)();
            entity = report.done;
            mike = report;
            if(!entity) { _fun85949_ip = 63; continue _fun85949 }
 93:
            entity = new Array(0);
            zulu = _closure1_slot11;
            options = undefined;
            mike = argFoo;
            golf = zulu.bind(options)(mike);
            zulu = golf.bind(options)();
            mike = zulu.done;
            oscar = 8;
            report = undefined;
            tango = zulu;
            zulu = undefined;
            if(mike) { _fun85949_ip = 297; continue _fun85949 }
 139:
            sizing = tango.value;
            backup = report;
            romeo = zulu;
            if(!(offset != sizing)) { _fun85949_ip = 273; continue _fun85949 }
 154:
            foxtrot = sizing.type;
            kilo = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = kilo.bind(options)(mike);
            mike = mike.AutocompleterResultTypes;
            mike = mike.HEADER;
            backup = sizing;
            romeo = zulu;
            if(!(foxtrot !== mike)) { _fun85949_ip = 273; continue _fun85949 }
 198:
            mike = sizing.record;
            mike = mike.id;
            foxtrot = yankee.has;
            foxtrot = foxtrot.bind(yankee)(mike);
            backup = report;
            romeo = mike;
            if(foxtrot) { _fun85949_ip = 273; continue _fun85949 }
 228:
            foxtrot = yankee.add;
            foxtrot = foxtrot.bind(yankee)(mike);
            foxtrot = report;
            if(!(offset != report)) { _fun85949_ip = 257; continue _fun85949 }
 245:
            kilo = entity.push;
            kilo = kilo.bind(entity)(report);
            foxtrot = undefined;
 257:
            kilo = entity.push;
            kilo = kilo.bind(entity)(sizing);
            backup = foxtrot;
            romeo = mike;
 273:
            foxtrot = golf.bind(options)();
            mike = foxtrot.done;
            report = backup;
            zulu = romeo;
            tango = foxtrot;
            if(!mike) { _fun85949_ip = 139; continue _fun85949 }
 297:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: getLastChannelResult
        _fun85950: for(var _fun85950_ip = 0; ; ) switch(_fun85950_ip) {
 0:
            zulu = argFoo;
            entity = null;
            if(!(entity != zulu)) { _fun85950_ip = 154; continue _fun85950 }
 12:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 9;
            mike = report[mike];
            verify = undefined;
            mike = tango.bind(verify)(mike);
            tango = mike.bind(verify)(zulu);
            zulu = entity == tango;
            mike = null;
            if(zulu) { _fun85950_ip = 152; continue _fun85950 }
 51:
            zulu = _closure1_slot8;
            report = zulu.bind(verify)(tango);
            zulu = null;
            if(!report) { _fun85950_ip = 149; continue _fun85950 }
 65:
            golf = tango.type;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            report = 8;
            report = offset[report];
            report = options.bind(verify)(report);
            report = report.AutocompleterResultTypes;
            report = report.USER;
            report = golf === report;
            if(report) { _fun85950_ip = 141; continue _fun85950 }
 109:
            verify = _closure1_slot6;
            options = verify.can;
            oscar = _closure1_slot9;
            golf = oscar.VIEW_CHANNEL;
            oscar = tango.record;
            report = options.bind(verify)(golf, oscar);
 141:
            zulu = null;
            if(!report) { _fun85950_ip = 149; continue _fun85950 }
 146:
            zulu = tango;
 149:
            mike = zulu;
 152:
            return mike;
 154:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: filterResults
        zulu = argFoo;
        mike = argBar;
        var _closure2_slot0 = mike;
        mike = zulu.filter;
        entity = function(argFoo) {
            _fun85952: for(var _fun85952_ip = 0; ; ) switch(_fun85952_ip) {
 0:
                oscar = argFoo;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 11;
                entity = zulu[entity];
                offset = undefined;
                mike = mike.bind(offset)(entity);
                entity = mike.isNotNullish;
                entity = entity.bind(mike)(oscar);
                if(!entity) { _fun85952_ip = 376; continue _fun85952 }
 45:
                zulu = oscar.type;
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                yankee = 8;
                mike = mike[yankee];
                mike = tango.bind(offset)(mike);
                mike = mike.AutocompleterResultTypes;
                mike = mike.HEADER;
                mike = zulu === mike;
                if(mike) { _fun85952_ip = 373; continue _fun85952 }
 92:
                zulu = _closure1_slot8;
                zulu = zulu.bind(offset)(oscar);
                if(!zulu) { _fun85952_ip = 370; continue _fun85952 }
 107:
                report = _closure2_slot0;
                options = oscar.type;
                verify = _closure1_slot0;
                tango = _closure1_slot2;
                tango = tango[yankee];
                tango = verify.bind(offset)(tango);
                tango = tango.AutocompleterResultTypes;
                tango = tango.USER;
                if(!(options !== tango)) { _fun85952_ip = 327; continue _fun85952 }
 155:
                options = oscar.type;
                verify = _closure1_slot0;
                tango = _closure1_slot2;
                tango = tango[yankee];
                tango = verify.bind(offset)(tango);
                tango = tango.AutocompleterResultTypes;
                tango = tango.GROUP_DM;
                tango = options === tango;
                if(tango) { _fun85952_ip = 325; continue _fun85952 }
 199:
                options = oscar.record;
                verify = options.type;
                options = _closure1_slot10;
                options = options.GUILD_FORUM;
                options = verify !== options;
                if(!options) { _fun85952_ip = 252; continue _fun85952 }
 227:
                verify = oscar.record;
                offset = verify.type;
                verify = _closure1_slot10;
                verify = verify.GUILD_MEDIA;
                options = offset !== verify;
 252:
                if(!options) { _fun85952_ip = 287; continue _fun85952 }
 255:
                romeo = _closure1_slot6;
                yankee = romeo.can;
                verify = _closure1_slot9;
                offset = verify.VIEW_CHANNEL;
                verify = oscar.record;
                options = yankee.bind(romeo)(offset, verify);
 287:
                if(!options) { _fun85952_ip = 322; continue _fun85952 }
 290:
                romeo = _closure1_slot6;
                yankee = romeo.can;
                verify = _closure1_slot9;
                offset = verify.SEND_MESSAGES;
                verify = oscar.record;
                options = yankee.bind(romeo)(offset, verify);
 322:
                tango = options;
 325:
                _fun85952_ip = 367; continue _fun85952;
 327:
                if(report) { _fun85952_ip = 364; continue _fun85952 }
 330:
                options = _closure1_slot5;
                golf = options.getDMChannelFromUserId;
                oscar = oscar.record;
                oscar = oscar.id;
                golf = golf.bind(options)(oscar);
                oscar = null;
                report = oscar != golf;
 364:
                tango = report;
 367:
                zulu = tango;
 370:
                mike = zulu;
 373:
                entity = mike;
 376:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.isAllowedType;
    var _closure1_slot8 = report;
    report = 6;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.Permissions;
    var _closure1_slot9 = options;
    report = report.ChannelTypes;
    var _closure1_slot10 = report;
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/share/formatResults.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: formatResults
        _fun85953: for(var _fun85953_ip = 0; ; ) switch(_fun85953_ip) {
 0:
            zulu = argFoo;
            report = zulu.results;
            entity = zulu.hasQuery;
            verify = zulu.queryMode;
            var _closure2_slot0 = verify;
            kilo = zulu.frequentChannels;
            result = zulu.targetDestination;
            backup = zulu.selectedDestinations;
            offset = zulu.pinnedDestinations;
            golf = zulu.originDestination;
            var _closure2_slot1 = golf;
            tango = zulu.includeMissingDMs;
            if(entity) { _fun85953_ip = 390; continue _fun85953 }
 73:
            entity = null;
            if(!(entity != offset)) { _fun85953_ip = 90; continue _fun85953 }
 79:
            oscar = offset.length;
            zulu = 0;
            if(!(!(oscar > zulu))) { _fun85953_ip = 96; continue _fun85953 }
 90:
            oscar = new Array(0);
            _fun85953_ip = 113; continue _fun85953;
 96:
            options = offset.map;
            zulu = function(argFoo) {
                zulu = _closure1_slot15;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            oscar = options.bind(offset)(zulu);
 113:
            offset = _closure1_slot4;
            options = offset.getChannelHistory;
            romeo = options.bind(offset)();
            options = romeo.length;
            offset = 0;
            if(!(!(options > offset))) { _fun85953_ip = 147; continue _fun85953 }
 141:
            foxtrot = new Array(0);
            _fun85953_ip = 164; continue _fun85953;
 147:
            yankee = romeo.map;
            options = function(argFoo) {
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 9;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            foxtrot = yankee.bind(romeo)(options);
 164:
            options = kilo.length;
            if(!(!(options > offset))) { _fun85953_ip = 179; continue _fun85953 }
 173:
            romeo = new Array(0);
            _fun85953_ip = 196; continue _fun85953;
 179:
            yankee = kilo.map;
            options = function(argFoo) {
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 9;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = argFoo;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            romeo = yankee.bind(kilo)(options);
 196:
            yankee = _closure1_slot18;
            options = new Array(1);
            source = options;
            update = oscar;
            echo = 0;
            kilo = arraySpread(source, update, echo);
            sizing = entity != result;
            oscar = null;
            if(!sizing) { _fun85953_ip = 236; continue _fun85953 }
 225:
            output = _closure1_slot15;
            sizing = undefined;
            oscar = output.bind(sizing)(result);
 236:
            options[kilo] = oscar;
            oscar = 1;
            echo = kilo + oscar;
            source = options;
            update = foxtrot;
            echo = arraySpread(source, update, echo);
            source = options;
            update = romeo;
            oscar = arraySpread(source, update, echo);
            oscar = undefined;
            options = yankee.bind(oscar)(options, tango);
            romeo = entity == backup;
            yankee = undefined;
            if(romeo) { _fun85953_ip = 302; continue _fun85953 }
 285:
            foxtrot = backup.find;
            romeo = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.isEqual;
                mike = _closure2_slot1;
                entity = argFoo;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            yankee = foxtrot.bind(backup)(romeo);
 302:
            yankee = entity != yankee;
            if(!(entity != golf)) { _fun85953_ip = 328; continue _fun85953 }
 310:
            if(yankee) { _fun85953_ip = 328; continue _fun85953 }
 313:
            yankee = golf.id;
            golf = new Array(1);
            golf[0] = yankee;
            _fun85953_ip = 332; continue _fun85953;
 328:
            golf = new Array(0);
 332:
            if(!(entity == verify)) { _fun85953_ip = 362; continue _fun85953 }
 336:
            entity = _closure1_slot16;
            verify = entity.bind(oscar)(options, golf);
            golf = verify.slice;
            entity = 15;
            entity = golf.bind(verify)(offset, entity);
            _fun85953_ip = 388; continue _fun85953;
 362:
            zulu = _closure1_slot16;
            golf = options.filter;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            mike = golf.bind(options)(mike);
            entity = zulu.bind(oscar)(mike);
 388:
            return entity;
 390:
            zulu = _closure1_slot16;
            entity = _closure1_slot18;
            mike = undefined;
            entity = entity.bind(mike)(report, tango);
            entity = zulu.bind(mike)(entity);
            return entity;
        }
    };
    zulu['default'] = report;
    report = function(argFoo) { // Original name: getDestinationIdFromChannelId
        _fun85959: for(var _fun85959_ip = 0; ; ) switch(_fun85959_ip) {
 0:
            mike = argFoo;
            tango = _closure1_slot5;
            zulu = tango.getChannel;
            zulu = zulu.bind(tango)(mike);
            tango = null;
            report = tango == zulu;
            tango = undefined;
            if(report) { _fun85959_ip = 36; continue _fun85959 }
 31:
            tango = zulu.type;
 36:
            entity = _closure1_slot10;
            entity = entity.DM;
            if(!(tango !== entity)) { _fun85959_ip = 66; continue _fun85959 }
 50:
            entity = {};
            tango = 'channel';
            entity['type'] = tango;
            entity['id'] = mike;
            _fun85959_ip = 95; continue _fun85959;
 66:
            mike = {};
            tango = 'user';
            mike['type'] = tango;
            tango = zulu.recipients;
            zulu = 0;
            zulu = tango[zulu];
            mike['id'] = zulu;
            entity = mike;
 95:
            return entity;
        }
    };
    zulu['getDestinationIdFromChannelId'] = report;
    report = function(argFoo) { // Original name: destinationKey
        entity = argFoo;
        report = entity.type;
        tango = entity.id;
        entity = global;
        entity = entity.HermesInternal;
        zulu = entity.concat;
        mike = '';
        entity = '-';
        entity = zulu.bind(mike)(report, entity, tango);
        return entity;
    };
    zulu['destinationKey'] = report;
    zulu['getChannelIdFromDestinationId'] = tango;
    tango = function() { // Original name: getOrResolveChannelIdFromDestinationId
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getOrResolveChannelIdFromDestinationId'] = tango;
    mike = function(argFoo) { // Original name: formatResultsWithHeaders
        _fun85962: for(var _fun85962_ip = 0; ; ) switch(_fun85962_ip) {
 0:
            entity = argFoo;
            golf = entity.results;
            mike = entity.selectedResult;
            oscar = entity.hasNonEmptyQuery;
            romeo = entity.queryMode;
            var _closure2_slot0 = romeo;
            offset = entity.selectedChannelId;
            foxtrot = entity.frequentChannels;
            entity = null;
            if(!(entity == mike)) { _fun85962_ip = 57; continue _fun85962 }
 51:
            report = new Array(0);
            _fun85962_ip = 79; continue _fun85962;
 57:
            mike = mike.record;
            zulu = mike.id;
            mike = new Array(1);
            mike[0] = zulu;
            report = mike;
 79:
            result = _closure1_slot0;
            zulu = _closure1_slot2;
            options = 8;
            yankee = zulu[options];
            tango = undefined;
            backup = result.bind(tango)(yankee);
            yankee = backup.createHeaderResult;
            sizing = 10;
            kilo = zulu[sizing];
            kilo = result.bind(tango)(kilo);
            output = kilo.intl;
            kilo = output.string;
            zulu = zulu[sizing];
            zulu = result.bind(tango)(zulu);
            zulu = zulu.t;
            zulu = zulu.qm9dSk;
            zulu = kilo.bind(output)(zulu);
            zulu = yankee.bind(backup)(zulu);
            if(oscar) { _fun85962_ip = 401; continue _fun85962 }
 168:
            yankee = foxtrot.map;
            oscar = function(argFoo) {
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 9;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = argFoo;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            foxtrot = yankee.bind(foxtrot)(oscar);
            yankee = foxtrot.filter;
            backup = _closure1_slot0;
            kilo = _closure1_slot2;
            oscar = 11;
            oscar = kilo[oscar];
            oscar = backup.bind(tango)(oscar);
            oscar = oscar.isNotNullish;
            foxtrot = yankee.bind(foxtrot)(oscar);
            yankee = foxtrot.filter;
            oscar = _closure1_slot8;
            yankee = yankee.bind(foxtrot)(oscar);
            oscar = _closure1_slot16;
            if(!(entity == romeo)) { _fun85962_ip = 355; continue _fun85962 }
 243:
            kilo = _closure1_slot0;
            entity = _closure1_slot2;
            options = entity[options];
            romeo = kilo.bind(tango)(options);
            options = romeo.createHeaderResult;
            foxtrot = entity[sizing];
            foxtrot = kilo.bind(tango)(foxtrot);
            backup = foxtrot.intl;
            foxtrot = backup.string;
            entity = entity[sizing];
            entity = kilo.bind(tango)(entity);
            entity = entity.t;
            entity = entity.80lOZ2;
            entity = foxtrot.bind(backup)(entity);
            options = options.bind(romeo)(entity);
            entity = new Array(3);
            entity[0] = options;
            options = _closure1_slot17;
            options = options.bind(tango)(offset);
            entity[1] = options;
            entity[2] = zulu;
            echo = 3;
            source = entity;
            update = yankee;
            options = arraySpread(source, update, echo);
            _fun85962_ip = 393; continue _fun85962;
 355:
            options = new Array(1);
            options[0] = zulu;
            offset = yankee.filter;
            verify = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            update = offset.bind(yankee)(verify);
            echo = 1;
            source = options;
            verify = arraySpread(source, update, echo);
            entity = options;
 393:
            entity = oscar.bind(tango)(entity, report);
            return entity;
 401:
            entity = new Array(1);
            entity[0] = zulu;
            zulu = _closure1_slot16;
            oscar = golf.filter;
            mike = _closure1_slot8;
            mike = oscar.bind(golf)(mike);
            update = zulu.bind(tango)(mike, report);
            echo = 1;
            source = entity;
            mike = arraySpread(source, update, echo);
            return entity;
        }
    };
    zulu['formatResultsWithHeaders'] = mike;
    return entity;
})();