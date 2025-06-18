// app/modules/build_overrides/validateBuildOverride.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.BUILD_OVERRIDE_TARGET_NAMES;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PublicReleaseChannels;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/build_overrides/validateBuildOverride.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: validateBuildOverride
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            offset = argBar;
            foxtra = argBaz;
            tangon = null;
            if(!(tangon != entity)) { _fun00008_ip = 959; continue _fun00007 }
 18:
            if(!(tangon != offset)) { _fun00008_ip = 959; continue _fun00007 }
 25:
            zuuluu = entity.releaseChannel;
            romeon = entity.expiresAt;
            verify = entity.validForUserIds;
            output = entity.allowedVersions;
            oscard = entity.targetBuildOverride;
            entity = global;
            report = entity.Object;
            michal = report.keys;
            option = michal.bind(report)(oscard);
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            report = 5;
            report = oscard[report];
            oscard = undefined;
            golfie = golfie.bind(oscard)(report);
            report = golfie.intersection;
            report = report.bind(golfie)(option, offset);
            golfie = report.length;
            report = 0;
            if(!(report !== golfie)) { _fun00008_ip = 841; continue _fun00007 }
 126:
            if(!(tangon != zuuluu)) { _fun00008_ip = 155; continue _fun00007 }
 130:
            golfie = entity.window;
            golfie = golfie.GLOBAL_ENV;
            golfie = golfie.RELEASE_CHANNEL;
            if(!(zuuluu === golfie)) { _fun00008_ip = 681; continue _fun00007 }
 155:
            if(!(tangon != output)) { _fun00008_ip = 408; continue _fun00007 }
 162:
            yankee = tangon == foxtra;
            offset = false;
            golfie = false;
            if(yankee) { _fun00008_ip = 312; continue _fun00007 }
 176:
            yankee = output.includes;
            yankee = yankee.bind(output)(foxtra);
            golfie = true;
            if(yankee) { _fun00008_ip = 312; continue _fun00007 }
 191:
            yankee = foxtra.split;
            update = '.';
            foxtra = yankee.bind(foxtra)(update);
            yankee = _closure1_slot3;
            echoed = 1;
            yankee = yankee.bind(oscard)(foxtra, echoed);
            result = yankee[report];
            yankee = _closure1_slot7;
            sizing = yankee.bind(oscard)(output);
            foxtra = sizing.bind(oscard)();
            yankee = foxtra.done;
            kiloes = 2;
            backup = '*';
            golfie = false;
            if(yankee) { _fun00008_ip = 312; continue _fun00007 }
 252:
            ctrled = foxtra.value;
            yankee = ctrled.split;
            ctrled = yankee.bind(ctrled)(update);
            yankee = _closure1_slot3;
            ctrled = yankee.bind(oscard)(ctrled, kiloes);
            yankee = ctrled[report];
            ctrled = ctrled[echoed];
            if(!(backup === ctrled)) { _fun00008_ip = 295; continue _fun00007 }
 289:
            golfie = true;
            if(!(result !== yankee)) { _fun00008_ip = 312; continue _fun00007 }
 295:
            ctrled = sizing.bind(oscard)();
            yankee = ctrled.done;
            foxtra = ctrled;
            golfie = false;
            if(!yankee) { _fun00008_ip = 252; continue _fun00007 }
 312:
            if(golfie) { _fun00008_ip = 408; continue _fun00007 }
 315:
            golfie = {};
            golfie['valid'] = offset;
            yankee = _closure1_slot0;
            kiloes = _closure1_slot2;
            offset = 4;
            foxtra = kiloes[offset];
            foxtra = yankee.bind(oscard)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.formatToPlainString;
            offset = kiloes[offset];
            offset = yankee.bind(oscard)(offset);
            offset = offset.t;
            yankee = offset.GOEF0N;
            offset = {};
            sizing = output.join;
            kiloes = ', ';
            kiloes = sizing.bind(output)(kiloes);
            offset['releaseChannel'] = kiloes;
            offset = foxtra.bind(backup)(yankee, offset);
            golfie['reason'] = offset;
            return golfie;
 408:
            offset = tangon != romeon;
            golfie = null;
            if(!offset) { _fun00008_ip = 456; continue _fun00007 }
 417:
            offset = entity.Date;
            yankee = offset.prototype;
            yankee = Object.create(yankee, {constructor: {value: offset}});
            config = yankee;
            sequen = romeon;
            offset = new config[offset](sequen, vacuum);
            yankee = offset instanceof Object ? offset : yankee;
            offset = yankee.getTime;
            golfie = offset.bind(yankee)();
 456:
            if(!(tangon != golfie)) { _fun00008_ip = 482; continue _fun00007 }
 460:
            offset = entity.Date;
            tangon = offset.now;
            tangon = tangon.bind(offset)();
            if(!(!(golfie < tangon))) { _fun00008_ip = 605; continue _fun00007 }
 482:
            tangon = verify.length;
            if(!(tangon > report)) { _fun00008_ip = 591; continue _fun00007 }
 491:
            golfie = verify.includes;
            offset = _closure1_slot4;
            tangon = offset.getId;
            tangon = tangon.bind(offset)();
            tangon = golfie.bind(verify)(tangon);
            if(tangon) { _fun00008_ip = 591; continue _fun00007 }
 518:
            tangon = {};
            golfie = false;
            tangon['valid'] = golfie;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            golfie = 4;
            verify = romeon[golfie];
            verify = yankee.bind(oscard)(verify);
            offset = verify.intl;
            verify = offset.string;
            golfie = romeon[golfie];
            golfie = yankee.bind(oscard)(golfie);
            golfie = golfie.t;
            golfie = golfie.qZgV0d;
            golfie = verify.bind(offset)(golfie);
            tangon['reason'] = golfie;
            _fun00008_ip = 603; continue _fun00007;
 591:
            golfie = {};
            verify = true;
            golfie['valid'] = verify;
            tangon = golfie;
 603:
            _fun00008_ip = 679; continue _fun00007;
 605:
            golfie = {};
            verify = false;
            golfie['valid'] = verify;
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            verify = 4;
            offset = foxtra[verify];
            offset = romeon.bind(oscard)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtra[verify];
            verify = romeon.bind(oscard)(verify);
            verify = verify.t;
            verify = verify.8eRE6e;
            verify = offset.bind(yankee)(verify);
            golfie['reason'] = verify;
            tangon = golfie;
 679:
            return tangon;
 681:
            tangon = _closure1_slot6;
            tangon = tangon.PTB;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 752; continue _fun00007 }
 695:
            tangon = zuuluu.charAt;
            report = tangon.bind(zuuluu)(report);
            tangon = report.toUpperCase;
            golfie = tangon.bind(report)();
            report = zuuluu.slice;
            tangon = 1;
            report = report.bind(zuuluu)(tangon);
            entity = entity.HermesInternal;
            tangon = entity.concat;
            entity = '';
            verify = tangon.bind(entity)(golfie, report);
            _fun00008_ip = 762; continue _fun00007;
 752:
            entity = zuuluu.toUpperCase;
            verify = entity.bind(zuuluu)();
 762:
            entity = {};
            zuuluu = false;
            entity['valid'] = zuuluu;
            tangon = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 4;
            report = offset[zuuluu];
            report = tangon.bind(oscard)(report);
            golfie = report.intl;
            report = golfie.formatToPlainString;
            zuuluu = offset[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.GOEF0N;
            zuuluu = {};
            zuuluu['releaseChannel'] = verify;
            zuuluu = report.bind(golfie)(tangon, zuuluu);
            entity['reason'] = zuuluu;
            return entity;
 841:
            entity = {};
            zuuluu = false;
            entity['valid'] = zuuluu;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 4;
            tangon = golfie[michal];
            tangon = zuuluu.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.formatToPlainString;
            michal = golfie[michal];
            michal = zuuluu.bind(oscard)(michal);
            michal = michal.t;
            zuuluu = michal.wySUzs;
            michal = {};
            golfie = option.map;
            oscard = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure1_slot5;
                    entity = argFoo;
                    michal = michal[entity];
                    entity = null;
                    zuuluu = entity != michal;
                    entity = 'unknown';
                    if(!zuuluu) { _fun00010_ip = 30; continue _fun00009 }
 27:
                    entity = michal;
 30:
                    return entity;
                }
            };
            option = golfie.bind(option)(oscard);
            golfie = option.join;
            oscard = ', ';
            oscard = golfie.bind(option)(oscard);
            michal['requestedTargets'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            entity['reason'] = michal;
            return entity;
 959:
            entity = {};
            michal = false;
            entity['valid'] = michal;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 4;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.d34xi4;
            michal = zuuluu.bind(tangon)(michal);
            entity['reason'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();