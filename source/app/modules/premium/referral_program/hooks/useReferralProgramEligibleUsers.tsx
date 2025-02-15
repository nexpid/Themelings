// app/modules/premium/referral_program/hooks/useReferralProgramEligibleUsers.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun105014: for(var _fun105014_ip = 0; ; ) switch(_fun105014_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun105014_ip = 46; continue _fun105014 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun105014_ip = 55; continue _fun105014 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun105014_ip = 345; continue _fun105014 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun105014_ip = 323; continue _fun105014 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun105014_ip = 283; continue _fun105014 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun105014_ip = 270; continue _fun105014 }
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
            if(!golf) { _fun105014_ip = 163; continue _fun105014 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun105014_ip = 179; continue _fun105014 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun105014_ip = 249; continue _fun105014 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun105014_ip = 249; continue _fun105014 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun105014_ip = 234; continue _fun105014 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun105014_ip = 247; continue _fun105014 }
 234:
            verify = _closure1_slot8;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun105014_ip = 265; continue _fun105014;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun105014_ip = 283; continue _fun105014;
 270:
            golf = _closure1_slot8;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun105014_ip = 323; continue _fun105014 }
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
            if(!tango) { _fun105014_ip = 330; continue _fun105014 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun105015: for(var _fun105015_ip = 0; ; ) switch(_fun105015_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun105015_ip = 56; continue _fun105015 }
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
                    _fun105015_ip = 67; continue _fun105015;
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
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun105016: for(var _fun105016_ip = 0; ; ) switch(_fun105016_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun105016_ip = 23; continue _fun105016 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun105016_ip = 33; continue _fun105016 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun105016_ip = 70; continue _fun105016 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun105016_ip = 55; continue _fun105016 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/referral_program/hooks/useReferralProgramEligibleUsers.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        entity = argFoo;
        offset = entity.searchQuery;
        var _closure2_slot0 = offset;
        mike = entity.selectedUsers;
        var _closure2_slot1 = mike;
        romeo = entity.limit;
        var _closure2_slot2 = romeo;
        zulu = _closure1_slot0;
        foxtrot = _closure1_slot2;
        mike = 4;
        entity = foxtrot[mike];
        yankee = undefined;
        verify = zulu.bind(yankee)(entity);
        options = verify.useStateFromStores;
        entity = _closure1_slot6;
        oscar = new Array(1);
        oscar[0] = entity;
        tango = function() {
            mike = _closure1_slot6;
            entity = mike.getRecipientStatus;
            entity = entity.bind(mike)();
            return entity;
        };
        tango = options.bind(verify)(oscar, tango);
        var _closure2_slot3 = tango;
        mike = foxtrot[mike];
        tango = zulu.bind(yankee)(mike);
        zulu = tango.useStateFromStores;
        mike = new Array(1);
        mike[0] = entity;
        entity = function() {
            mike = _closure1_slot6;
            entity = mike.getReferralsRemaining;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        var _closure2_slot4 = entity;
        verify = _closure1_slot5;
        zulu = verify.useState;
        mike = 0;
        zulu = zulu.bind(verify)(mike);
        sizing = _closure1_slot4;
        kilo = 2;
        zulu = sizing.bind(yankee)(zulu, kilo);
        tango = zulu[mike];
        var _closure2_slot5 = tango;
        backup = 1;
        zulu = zulu[backup];
        var _closure2_slot6 = zulu;
        tango = verify.useState;
        zulu = new Array(0);
        zulu = tango.bind(verify)(zulu);
        zulu = sizing.bind(yankee)(zulu, kilo);
        oscar = zulu[mike];
        zulu = zulu[backup];
        var _closure2_slot7 = zulu;
        zulu = verify.useState;
        options = false;
        zulu = zulu.bind(verify)(options);
        tango = sizing.bind(yankee)(zulu, kilo);
        zulu = tango[mike];
        var _closure2_slot8 = zulu;
        tango = tango[backup];
        var _closure2_slot9 = tango;
        tango = verify.useState;
        tango = tango.bind(verify)(options);
        options = sizing.bind(yankee)(tango, kilo);
        tango = options[mike];
        var _closure2_slot10 = tango;
        options = options[backup];
        var _closure2_slot11 = options;
        output = verify.useState;
        options = global;
        options = options.Map;
        result = options.prototype;
        result = Object.create(result, {constructor: {value: options}});
        source = result;
        options = new source[options](update);
        options = options instanceof Object ? options : result;
        options = output.bind(verify)(options);
        options = sizing.bind(yankee)(options, kilo);
        mike = options[mike];
        var _closure2_slot12 = mike;
        options = options[backup];
        var _closure2_slot13 = options;
        options = _closure1_slot1;
        golf = 5;
        golf = foxtrot[golf];
        foxtrot = options.bind(yankee)(golf);
        golf = null;
        options = golf != entity;
        golf = 'Referrals remaining should not be null';
        golf = foxtrot.bind(yankee)(options, golf);
        golf = function() {
            tango = _closure1_slot3;
            zulu = undefined;
            mike = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun105022: for(var _fun105022_ip = 0; ; ) switch(_fun105022_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun105022_ip = 284; continue _fun105022 }
 10:
                        zulu = global;
                        mike = zulu.Map;
                        tango = mike.prototype;
                        tango = Object.create(tango, {constructor: {value: mike}});
                        update = tango;
                        mike = new update[mike](echo);
                        golf = mike instanceof Object ? mike : tango;
                        oscar = _closure1_slot7;
                        report = _closure2_slot3;
                        mike = undefined;
                        foxtrot = oscar.bind(mike)(report);
                        oscar = foxtrot.bind(mike)();
                        report = oscar.done;
                        romeo = 7;
                        yankee = 2;
                        offset = 0;
                        verify = 1;
                        options = 6;
                        if(report) { _fun105022_ip = 238; continue _fun105022 }
 88:
                        kilo = oscar.value;
                        report = _closure1_slot4;
                        report = report.bind(mike)(kilo, yankee);
                        sizing = report[offset];
                        kilo = report[verify];
                        output = _closure1_slot0;
                        report = _closure1_slot2;
                        report = report[options];
                        report = output.bind(mike)(report);
                        report = report.ReferralOfferStatus;
                        report = report.PENDING;
                        if(!(kilo === report)) { _fun105022_ip = 220; continue _fun105022 }
 144:
                        kilo = _closure2_slot12;
                        report = kilo.has;
                        report = report.bind(kilo)(sizing);
                        if(report) { _fun105022_ip = 220; continue _fun105022 }
 161:
                        kilo = _closure1_slot0;
                        report = _closure1_slot2;
                        report = report[romeo];
                        kilo = kilo.bind(mike)(report);
                        report = kilo.getUser;
                        report = report.bind(kilo)(sizing);
                        SaveGenerator(address=193);
 191:
                        return report;
 193:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=14);
                        if(kilo) { _fun105022_ip = 217; continue _fun105022 }
 199:
                        sizing = golf.set;
                        kilo = report.id;
                        kilo = sizing.bind(golf)(kilo, report);
                        _fun105022_ip = 220; continue _fun105022;
 217:
                        return report;
 220:
                        kilo = foxtrot.bind(mike)();
                        report = kilo.done;
                        oscar = kilo;
                        if(!report) { _fun105022_ip = 88; continue _fun105022 }
 238:
                        report = _closure2_slot13;
                        report = report.bind(mike)(golf);
                        tango = _closure2_slot7;
                        oscar = zulu.Array;
                        report = oscar.from;
                        zulu = golf.values;
                        zulu = zulu.bind(golf)();
                        zulu = report.bind(oscar)(zulu);
                        zulu = tango.bind(mike)(zulu);
                        return mike;
 284:
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        golf = golf.bind(yankee)();
        options = function() {
            tango = _closure1_slot3;
            zulu = undefined;
            mike = function* (argFoo, argBar) {
                entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                    _fun105026: for(var _fun105026_ip = 0; ; ) switch(_fun105026_ip) {
 0:
                        StartGenerator();
                        mike = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                        if(tango) { _fun105026_ip = 508; continue _fun105026 }
 15:
                        oscar = mike;
                        var _closure5_slot0 = mike;
                        zulu = argBar;
                        mike = undefined;
                        backup = undefined;
                        var _closure5_slot1 = mike;
                        kilo = undefined;
                        sizing = undefined;
                        var _closure5_slot2 = mike;
                        golf = _closure2_slot8;
                        if(golf) { _fun105026_ip = 505; continue _fun105026 }
 54:
                        golf = _closure2_slot10;
                        if(golf) { _fun105026_ip = 505; continue _fun105026 }
 64:
                        options = oscar;
                        golf = null;
                        if(!(golf != options)) { _fun105026_ip = 505; continue _fun105026 }
 76:
                        golf = _closure2_slot4;
                        foxtrot = 0;
                        if(!(foxtrot !== golf)) { _fun105026_ip = 505; continue _fun105026 }
 89: // try_start_0 // try_start_2
                        options = _closure2_slot9;
                        golf = true;
                        golf = options.bind(mike)(golf);
                        options = _closure2_slot12;
                        golf = options.values;
                        update = golf.bind(options)();
                        golf = new Array(0);
                        source = golf;
                        echo = 0;
                        options = arraySpread(source, update, echo);
                        _closure5_slot1 = golf;
                        verify = _closure1_slot7;
                        options = _closure2_slot3;
                        options = verify.bind(mike)(options);
                        kilo = options;
                        options = options.bind(mike)();
                        backup = options;
                        options = options.done;
                        romeo = 7;
                        yankee = 2;
                        offset = 1;
                        verify = 6;
                        if(options) { _fun105026_ip = 350; continue _fun105026 }
 179:
                        options = backup;
                        output = options.value;
                        options = _closure1_slot4;
                        options = options.bind(mike)(output, yankee);
                        sizing = options[foxtrot];
                        output = options[offset];
                        result = _closure1_slot0;
                        options = _closure1_slot2;
                        options = options[verify];
                        options = result.bind(mike)(options);
                        options = options.ReferralOfferStatus;
                        options = options.PENDING;
                        if(!(output === options)) { _fun105026_ip = 329; continue _fun105026 }
 238:
                        result = _closure2_slot12;
                        output = result.has;
                        options = sizing;
                        options = output.bind(result)(options);
                        if(options) { _fun105026_ip = 329; continue _fun105026 }
 258:
                        output = _closure1_slot0;
                        options = _closure1_slot2;
                        options = options[romeo];
                        result = output.bind(mike)(options);
                        output = result.getUser;
                        options = sizing;
                        options = output.bind(result)(options);
                        SaveGenerator(address=293);
 291:
                        return options;
 293:
                        ResumeGenerator(result_out_reg=7, return_bool_out_reg=16);
                        if(output) { _fun105026_ip = 315; continue _fun105026 }
 299:
                        result = _closure5_slot1;
                        output = result.push;
                        output = output.bind(result)(options);
                        _fun105026_ip = 329; continue _fun105026;
 315: // try_end0 // try_end2
                        result = _closure2_slot9;
                        output = false;
                        output = result.bind(mike)(output);
                        return options;
 329: // try_start_1 // try_start_3
                        options = kilo;
                        options = options.bind(mike)();
                        backup = options;
                        options = options.done;
                        if(!options) { _fun105026_ip = 179; continue _fun105026 }
 350:
                        options = _closure1_slot0;
                        golf = _closure1_slot2;
                        golf = golf[verify];
                        verify = options.bind(mike)(golf);
                        options = verify.fetchReferralEligibleUsers;
                        golf = oscar;
                        oscar = _closure2_slot0;
                        zulu = options.bind(verify)(golf, oscar, zulu);
                        SaveGenerator(address=391);
 389:
                        return zulu;
 391:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                        if(oscar) { _fun105026_ip = 450; continue _fun105026 }
 397:
                        _closure5_slot2 = zulu;
                        golf = _closure2_slot7;
                        oscar = function(argFoo) {
                            _fun105027: for(var _fun105027_ip = 0; ; ) switch(_fun105027_ip) {
 0:
                                mike = _closure5_slot2;
                                report = mike.users;
                                tango = report.filter;
                                mike = function(argFoo) {
                                    zulu = _closure2_slot1;
                                    mike = zulu.has;
                                    entity = argFoo;
                                    entity = entity.id;
                                    entity = mike.bind(zulu)(entity);
                                    entity = !entity;
                                    return entity;
                                };
                                tango = tango.bind(report)(mike);
                                report = _closure5_slot1;
                                mike = report.filter;
                                entity = function(argFoo) {
                                    zulu = _closure2_slot1;
                                    mike = zulu.has;
                                    entity = argFoo;
                                    entity = entity.id;
                                    entity = mike.bind(zulu)(entity);
                                    entity = !entity;
                                    return entity;
                                };
                                entity = mike.bind(report)(entity);
                                _closure5_slot1 = entity;
                                entity = _closure5_slot0;
                                oscar = 0;
                                if(!(oscar !== entity)) { _fun105027_ip = 95; continue _fun105027 }
 67:
                                entity = new Array(0);
                                options = argFoo;
                                verify = entity;
                                golf = 0;
                                golf = arraySpread(verify, options, golf);
                                verify = entity;
                                options = tango;
                                mike = arraySpread(verify, options, golf);
                                _fun105027_ip = 157; continue _fun105027;
 95:
                                report = _closure2_slot1;
                                mike = report.values;
                                options = mike.bind(report)();
                                mike = new Array(0);
                                verify = mike;
                                golf = 0;
                                golf = arraySpread(verify, options, golf);
                                oscar = _closure5_slot1;
                                zulu = oscar.values;
                                options = zulu.bind(oscar)();
                                verify = mike;
                                golf = arraySpread(verify, options, golf);
                                verify = mike;
                                options = tango;
                                zulu = arraySpread(verify, options, golf);
                                entity = mike;
 157:
                                return entity;
                            }
                        };
                        oscar = golf.bind(mike)(oscar);
                        oscar = _closure2_slot13;
                        report = function(argFoo) {
                            _fun105030: for(var _fun105030_ip = 0; ; ) switch(_fun105030_ip) {
 0:
                                entity = global;
                                zulu = entity.Map;
                                entity = zulu.prototype;
                                mike = Object.create(entity, {constructor: {value: zulu}});
                                verify = argFoo;
                                offset = mike;
                                entity = new offset[zulu](verify, options);
                                entity = entity instanceof Object ? entity : mike;
                                zulu = _closure1_slot7;
                                mike = _closure5_slot1;
                                report = undefined;
                                tango = zulu.bind(report)(mike);
                                zulu = tango.bind(report)();
                                mike = zulu.done;
                                if(mike) { _fun105030_ip = 100; continue _fun105030 }
 64:
                                golf = zulu.value;
                                oscar = entity.set;
                                mike = golf.id;
                                mike = oscar.bind(entity)(mike, golf);
                                oscar = tango.bind(report)();
                                mike = oscar.done;
                                zulu = oscar;
                                if(!mike) { _fun105030_ip = 64; continue _fun105030 }
 100:
                                return entity;
                            }
                        };
                        report = oscar.bind(mike)(report);
                        oscar = _closure2_slot6;
                        report = zulu.nextIndex;
                        report = oscar.bind(mike)(report);
 448: // try_end1
                        _fun105026_ip = 477; continue _fun105026;
 450: // try_end3
                        oscar = _closure2_slot9;
                        report = false;
                        report = oscar.bind(mike)(report);
                        return zulu;
 464: // try_start_4 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=2);
                        report = _closure2_slot11;
                        zulu = true;
                        zulu = report.bind(mike)(zulu);
 477: // try_end4
                        report = _closure2_slot9;
                        zulu = false;
                        zulu = report.bind(mike)(zulu);
                        _fun105026_ip = 505; continue _fun105026;
 490: // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register=2);
                        report = _closure2_slot9;
                        tango = false;
                        tango = report.bind(mike)(tango);
                        throw zulu;
 505:
                        return mike;
 508:
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        yankee = options.bind(yankee)();
        var _closure2_slot14 = yankee;
        options = {};
        options['limit'] = romeo;
        options['getNextRows'] = yankee;
        options['getLocalReferrals'] = golf;
        var _closure2_slot15 = options;
        golf = verify.useRef;
        golf = golf.bind(verify)(options);
        var _closure2_slot16 = golf;
        options = verify.useEffect;
        golf = function() {
            mike = _closure2_slot16;
            entity = _closure2_slot15;
            mike['current'] = entity;
            entity = undefined;
            return entity;
        };
        golf = options.bind(verify)(golf);
        options = verify.useEffect;
        golf = new Array(2);
        golf[0] = offset;
        golf[1] = entity;
        entity = function() {
            _fun105033: for(var _fun105033_ip = 0; ; ) switch(_fun105033_ip) {
 0:
                mike = _closure2_slot16;
                mike = mike.current;
                tango = mike.getNextRows;
                zulu = mike.limit;
                report = mike.getLocalReferrals;
                entity = _closure2_slot4;
                mike = 0;
                if(!(!(entity > mike))) { _fun105033_ip = 48; continue _fun105033 }
 40:
                entity = undefined;
                entity = report.bind(entity)();
                _fun105033_ip = 56; continue _fun105033;
 48:
                entity = undefined;
                entity = tango.bind(entity)(mike, zulu);
 56:
                entity = undefined;
                return entity;
            }
        };
        entity = options.bind(verify)(entity, golf);
        entity = {};
        entity['eligibleUsers'] = oscar;
        report = function() { // Original name: fetchUsers
            tango = _closure2_slot14;
            zulu = _closure2_slot5;
            mike = _closure2_slot2;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity['fetchUsers'] = report;
        entity['hasError'] = tango;
        entity['isFetching'] = zulu;
        entity['resendUsers'] = mike;
        return entity;
    };
    zulu['useReferralProgramEligibleUsers'] = mike;
    return entity;
})();