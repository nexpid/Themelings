// app/modules/premium/referral_program/hooks/useReferralProgramEligibleUsers.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot8;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot8;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/referral_program/hooks/useReferralProgramEligibleUsers.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        entity = argFoo;
        offset = entity.searchQuery;
        var _closure2_slot0 = offset;
        michal = entity.selectedUsers;
        var _closure2_slot1 = michal;
        romeon = entity.limit;
        var _closure2_slot2 = romeon;
        zuuluu = _closure1_slot0;
        foxtra = _closure1_slot2;
        michal = 4;
        entity = foxtra[michal];
        yankee = undefined;
        verify = zuuluu.bind(yankee)(entity);
        option = verify.useStateFromStores;
        entity = _closure1_slot6;
        oscard = new Array(1);
        oscard[0] = entity;
        tangon = function() {
            michal = _closure1_slot6;
            entity = michal.getRecipientStatus;
            entity = entity.bind(michal)();
            return entity;
        };
        tangon = option.bind(verify)(oscard, tangon);
        var _closure2_slot3 = tangon;
        michal = foxtra[michal];
        tangon = zuuluu.bind(yankee)(michal);
        zuuluu = tangon.useStateFromStores;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            michal = _closure1_slot6;
            entity = michal.getReferralsRemaining;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        var _closure2_slot4 = entity;
        verify = _closure1_slot5;
        zuuluu = verify.useState;
        michal = 0;
        zuuluu = zuuluu.bind(verify)(michal);
        sizing = _closure1_slot4;
        kiloes = 2;
        zuuluu = sizing.bind(yankee)(zuuluu, kiloes);
        tangon = zuuluu[michal];
        var _closure2_slot5 = tangon;
        backup = 1;
        zuuluu = zuuluu[backup];
        var _closure2_slot6 = zuuluu;
        tangon = verify.useState;
        zuuluu = new Array(0);
        zuuluu = tangon.bind(verify)(zuuluu);
        zuuluu = sizing.bind(yankee)(zuuluu, kiloes);
        oscard = zuuluu[michal];
        zuuluu = zuuluu[backup];
        var _closure2_slot7 = zuuluu;
        zuuluu = verify.useState;
        option = false;
        zuuluu = zuuluu.bind(verify)(option);
        tangon = sizing.bind(yankee)(zuuluu, kiloes);
        zuuluu = tangon[michal];
        var _closure2_slot8 = zuuluu;
        tangon = tangon[backup];
        var _closure2_slot9 = tangon;
        tangon = verify.useState;
        tangon = tangon.bind(verify)(option);
        option = sizing.bind(yankee)(tangon, kiloes);
        tangon = option[michal];
        var _closure2_slot10 = tangon;
        option = option[backup];
        var _closure2_slot11 = option;
        output = verify.useState;
        option = global;
        option = option.Map;
        result = option.prototype;
        result = Object.create(result, {constructor: {value: option}});
        source = result;
        option = new source[option](update);
        option = option instanceof Object ? option : result;
        option = output.bind(verify)(option);
        option = sizing.bind(yankee)(option, kiloes);
        michal = option[michal];
        var _closure2_slot12 = michal;
        option = option[backup];
        var _closure2_slot13 = option;
        option = _closure1_slot1;
        golfie = 5;
        golfie = foxtra[golfie];
        foxtra = option.bind(yankee)(golfie);
        golfie = null;
        option = golfie != entity;
        golfie = 'Referrals remaining should not be null';
        golfie = foxtra.bind(yankee)(option, golfie);
        golfie = function() {
            tangon = _closure1_slot3;
            zuuluu = undefined;
            michal = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00008_ip = 284; continue _fun00007 }
 10:
                        zuuluu = global;
                        michal = zuuluu.Map;
                        tangon = michal.prototype;
                        tangon = Object.create(tangon, {constructor: {value: michal}});
                        update = tangon;
                        michal = new update[michal](echoed);
                        golfie = michal instanceof Object ? michal : tangon;
                        oscard = _closure1_slot7;
                        report = _closure2_slot3;
                        michal = undefined;
                        foxtra = oscard.bind(michal)(report);
                        oscard = foxtra.bind(michal)();
                        report = oscard.done;
                        romeon = 7;
                        yankee = 2;
                        offset = 0;
                        verify = 1;
                        option = 6;
                        if(report) { _fun00008_ip = 238; continue _fun00007 }
 88:
                        kiloes = oscard.value;
                        report = _closure1_slot4;
                        report = report.bind(michal)(kiloes, yankee);
                        sizing = report[offset];
                        kiloes = report[verify];
                        output = _closure1_slot0;
                        report = _closure1_slot2;
                        report = report[option];
                        report = output.bind(michal)(report);
                        report = report.ReferralOfferStatus;
                        report = report.PENDING;
                        if(!(kiloes === report)) { _fun00008_ip = 220; continue _fun00007 }
 144:
                        kiloes = _closure2_slot12;
                        report = kiloes.has;
                        report = report.bind(kiloes)(sizing);
                        if(report) { _fun00008_ip = 220; continue _fun00007 }
 161:
                        kiloes = _closure1_slot0;
                        report = _closure1_slot2;
                        report = report[romeon];
                        kiloes = kiloes.bind(michal)(report);
                        report = kiloes.getUser;
                        report = report.bind(kiloes)(sizing);
                        SaveGenerator(address=193);
 191:
                        return report;
 193:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=14);
                        if(kiloes) { _fun00008_ip = 217; continue _fun00007 }
 199:
                        sizing = golfie.set;
                        kiloes = report.id;
                        kiloes = sizing.bind(golfie)(kiloes, report);
                        _fun00008_ip = 220; continue _fun00007;
 217:
                        return report;
 220:
                        kiloes = foxtra.bind(michal)();
                        report = kiloes.done;
                        oscard = kiloes;
                        if(!report) { _fun00008_ip = 88; continue _fun00007 }
 238:
                        report = _closure2_slot13;
                        report = report.bind(michal)(golfie);
                        tangon = _closure2_slot7;
                        oscard = zuuluu.Array;
                        report = oscard.from;
                        zuuluu = golfie.values;
                        zuuluu = zuuluu.bind(golfie)();
                        zuuluu = report.bind(oscard)(zuuluu);
                        zuuluu = tangon.bind(michal)(zuuluu);
                        return michal;
 284:
                        return entity;
                    }
                };
                return entity;
            };
            michal = tangon.bind(zuuluu)(michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = undefined;
                tangon = _closure3_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            return entity;
        };
        golfie = golfie.bind(yankee)();
        option = function() {
            tangon = _closure1_slot3;
            zuuluu = undefined;
            michal = function* (argFoo, argBar) {
                entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        StartGenerator();
                        michal = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                        if(tangon) { _fun00010_ip = 508; continue _fun00009 }
 15:
                        oscard = michal;
                        var _closure5_slot0 = michal;
                        zuuluu = argBar;
                        michal = undefined;
                        backup = undefined;
                        var _closure5_slot1 = michal;
                        kiloes = undefined;
                        sizing = undefined;
                        var _closure5_slot2 = michal;
                        golfie = _closure2_slot8;
                        if(golfie) { _fun00010_ip = 505; continue _fun00009 }
 54:
                        golfie = _closure2_slot10;
                        if(golfie) { _fun00010_ip = 505; continue _fun00009 }
 64:
                        option = oscard;
                        golfie = null;
                        if(!(golfie != option)) { _fun00010_ip = 505; continue _fun00009 }
 76:
                        golfie = _closure2_slot4;
                        foxtra = 0;
                        if(!(foxtra !== golfie)) { _fun00010_ip = 505; continue _fun00009 }
 89: // try_start_0 // try_start_2
                        option = _closure2_slot9;
                        golfie = true;
                        golfie = option.bind(michal)(golfie);
                        option = _closure2_slot12;
                        golfie = option.values;
                        update = golfie.bind(option)();
                        golfie = new Array(0);
                        source = golfie;
                        echoed = 0;
                        option = arraySpread(source, update, echoed);
                        _closure5_slot1 = golfie;
                        verify = _closure1_slot7;
                        option = _closure2_slot3;
                        option = verify.bind(michal)(option);
                        kiloes = option;
                        option = option.bind(michal)();
                        backup = option;
                        option = option.done;
                        romeon = 7;
                        yankee = 2;
                        offset = 1;
                        verify = 6;
                        if(option) { _fun00010_ip = 350; continue _fun00009 }
 179:
                        option = backup;
                        output = option.value;
                        option = _closure1_slot4;
                        option = option.bind(michal)(output, yankee);
                        sizing = option[foxtra];
                        output = option[offset];
                        result = _closure1_slot0;
                        option = _closure1_slot2;
                        option = option[verify];
                        option = result.bind(michal)(option);
                        option = option.ReferralOfferStatus;
                        option = option.PENDING;
                        if(!(output === option)) { _fun00010_ip = 329; continue _fun00009 }
 238:
                        result = _closure2_slot12;
                        output = result.has;
                        option = sizing;
                        option = output.bind(result)(option);
                        if(option) { _fun00010_ip = 329; continue _fun00009 }
 258:
                        output = _closure1_slot0;
                        option = _closure1_slot2;
                        option = option[romeon];
                        result = output.bind(michal)(option);
                        output = result.getUser;
                        option = sizing;
                        option = output.bind(result)(option);
                        SaveGenerator(address=293);
 291:
                        return option;
 293:
                        ResumeGenerator(result_out_reg=7, return_bool_out_reg=16);
                        if(output) { _fun00010_ip = 315; continue _fun00009 }
 299:
                        result = _closure5_slot1;
                        output = result.push;
                        output = output.bind(result)(option);
                        _fun00010_ip = 329; continue _fun00009;
 315: // try_end0 // try_end2
                        result = _closure2_slot9;
                        output = false;
                        output = result.bind(michal)(output);
                        return option;
 329: // try_start_1 // try_start_3
                        option = kiloes;
                        option = option.bind(michal)();
                        backup = option;
                        option = option.done;
                        if(!option) { _fun00010_ip = 179; continue _fun00009 }
 350:
                        option = _closure1_slot0;
                        golfie = _closure1_slot2;
                        golfie = golfie[verify];
                        verify = option.bind(michal)(golfie);
                        option = verify.fetchReferralEligibleUsers;
                        golfie = oscard;
                        oscard = _closure2_slot0;
                        zuuluu = option.bind(verify)(golfie, oscard, zuuluu);
                        SaveGenerator(address=391);
 389:
                        return zuuluu;
 391:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                        if(oscard) { _fun00010_ip = 450; continue _fun00009 }
 397:
                        _closure5_slot2 = zuuluu;
                        golfie = _closure2_slot7;
                        oscard = function(argFoo) {
                            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                michal = _closure5_slot2;
                                report = michal.users;
                                tangon = report.filter;
                                michal = function(argFoo) {
                                    zuuluu = _closure2_slot1;
                                    michal = zuuluu.has;
                                    entity = argFoo;
                                    entity = entity.id;
                                    entity = michal.bind(zuuluu)(entity);
                                    entity = !entity;
                                    return entity;
                                };
                                tangon = tangon.bind(report)(michal);
                                report = _closure5_slot1;
                                michal = report.filter;
                                entity = function(argFoo) {
                                    zuuluu = _closure2_slot1;
                                    michal = zuuluu.has;
                                    entity = argFoo;
                                    entity = entity.id;
                                    entity = michal.bind(zuuluu)(entity);
                                    entity = !entity;
                                    return entity;
                                };
                                entity = michal.bind(report)(entity);
                                _closure5_slot1 = entity;
                                entity = _closure5_slot0;
                                oscard = 0;
                                if(!(oscard !== entity)) { _fun00012_ip = 95; continue _fun00011 }
 67:
                                entity = new Array(0);
                                option = argFoo;
                                verify = entity;
                                golfie = 0;
                                golfie = arraySpread(verify, option, golfie);
                                verify = entity;
                                option = tangon;
                                michal = arraySpread(verify, option, golfie);
                                _fun00012_ip = 157; continue _fun00011;
 95:
                                report = _closure2_slot1;
                                michal = report.values;
                                option = michal.bind(report)();
                                michal = new Array(0);
                                verify = michal;
                                golfie = 0;
                                golfie = arraySpread(verify, option, golfie);
                                oscard = _closure5_slot1;
                                zuuluu = oscard.values;
                                option = zuuluu.bind(oscard)();
                                verify = michal;
                                golfie = arraySpread(verify, option, golfie);
                                verify = michal;
                                option = tangon;
                                zuuluu = arraySpread(verify, option, golfie);
                                entity = michal;
 157:
                                return entity;
                            }
                        };
                        oscard = golfie.bind(michal)(oscard);
                        oscard = _closure2_slot13;
                        report = function(argFoo) {
                            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                entity = global;
                                zuuluu = entity.Map;
                                entity = zuuluu.prototype;
                                michal = Object.create(entity, {constructor: {value: zuuluu}});
                                verify = argFoo;
                                offset = michal;
                                entity = new offset[zuuluu](verify, option);
                                entity = entity instanceof Object ? entity : michal;
                                zuuluu = _closure1_slot7;
                                michal = _closure5_slot1;
                                report = undefined;
                                tangon = zuuluu.bind(report)(michal);
                                zuuluu = tangon.bind(report)();
                                michal = zuuluu.done;
                                if(michal) { _fun00014_ip = 100; continue _fun00013 }
 64:
                                golfie = zuuluu.value;
                                oscard = entity.set;
                                michal = golfie.id;
                                michal = oscard.bind(entity)(michal, golfie);
                                oscard = tangon.bind(report)();
                                michal = oscard.done;
                                zuuluu = oscard;
                                if(!michal) { _fun00014_ip = 64; continue _fun00013 }
 100:
                                return entity;
                            }
                        };
                        report = oscard.bind(michal)(report);
                        oscard = _closure2_slot6;
                        report = zuuluu.nextIndex;
                        report = oscard.bind(michal)(report);
 448: // try_end1
                        _fun00010_ip = 477; continue _fun00009;
 450: // try_end3
                        oscard = _closure2_slot9;
                        report = false;
                        report = oscard.bind(michal)(report);
                        return zuuluu;
 464: // try_start_4 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=2);
                        report = _closure2_slot11;
                        zuuluu = true;
                        zuuluu = report.bind(michal)(zuuluu);
 477: // try_end4
                        report = _closure2_slot9;
                        zuuluu = false;
                        zuuluu = report.bind(michal)(zuuluu);
                        _fun00010_ip = 505; continue _fun00009;
 490: // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register=2);
                        report = _closure2_slot9;
                        tangon = false;
                        tangon = report.bind(michal)(tangon);
                        throw zuuluu;
 505:
                        return michal;
 508:
                        return entity;
                    }
                };
                return entity;
            };
            michal = tangon.bind(zuuluu)(michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = undefined;
                tangon = _closure3_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            return entity;
        };
        yankee = option.bind(yankee)();
        var _closure2_slot14 = yankee;
        option = {};
        option['limit'] = romeon;
        option['getNextRows'] = yankee;
        option['getLocalReferrals'] = golfie;
        var _closure2_slot15 = option;
        golfie = verify.useRef;
        golfie = golfie.bind(verify)(option);
        var _closure2_slot16 = golfie;
        option = verify.useEffect;
        golfie = function() {
            michal = _closure2_slot16;
            entity = _closure2_slot15;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        golfie = option.bind(verify)(golfie);
        option = verify.useEffect;
        golfie = new Array(2);
        golfie[0] = offset;
        golfie[1] = entity;
        entity = function() {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = _closure2_slot16;
                michal = michal.current;
                tangon = michal.getNextRows;
                zuuluu = michal.limit;
                report = michal.getLocalReferrals;
                entity = _closure2_slot4;
                michal = 0;
                if(!(!(entity > michal))) { _fun00016_ip = 48; continue _fun00015 }
 40:
                entity = undefined;
                entity = report.bind(entity)();
                _fun00016_ip = 56; continue _fun00015;
 48:
                entity = undefined;
                entity = tangon.bind(entity)(michal, zuuluu);
 56:
                entity = undefined;
                return entity;
            }
        };
        entity = option.bind(verify)(entity, golfie);
        entity = {};
        entity['eligibleUsers'] = oscard;
        report = function() { // Original name: fetchUsers
            tangon = _closure2_slot14;
            zuuluu = _closure2_slot5;
            michal = _closure2_slot2;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity['fetchUsers'] = report;
        entity['hasError'] = tangon;
        entity['isFetching'] = zuuluu;
        entity['resendUsers'] = michal;
        return entity;
    };
    zuuluu['useReferralProgramEligibleUsers'] = michal;
    return entity;
})();