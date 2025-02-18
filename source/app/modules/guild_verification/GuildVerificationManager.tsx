// app/modules/guild_verification/GuildVerificationManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot10;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: handleInviteData
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = entity.invite;
            zuuluu = michal.guild;
            michal = entity.invite;
            michal = michal.flags;
            golfie = null;
            tangon = golfie != michal;
            yankee = 0;
            if(!tangon) { _fun00006_ip = 39; continue _fun00005 }
 36:
            yankee = michal;
 39:
            if(!(golfie != zuuluu)) { _fun00006_ip = 86; continue _fun00005 }
 43:
            if(!(golfie != zuuluu)) { _fun00006_ip = 86; continue _fun00005 }
 47:
            oscard = zuuluu.features;
            if(!(golfie != oscard)) { _fun00006_ip = 86; continue _fun00005 }
 57:
            report = oscard.includes;
            tangon = _closure1_slot8;
            tangon = tangon.HUB;
            tangon = report.bind(oscard)(tangon);
            if(tangon) { _fun00006_ip = 285; continue _fun00005 }
 86:
            romeon = _closure1_slot0;
            report = _closure1_slot2;
            verify = 7;
            option = report[verify];
            oscard = undefined;
            offset = romeon.bind(oscard)(option);
            option = offset.hasFlag;
            foxtra = 8;
            report = report[foxtra];
            report = romeon.bind(oscard)(report);
            report = report.GuildInviteFlags;
            report = report.IS_GUEST_INVITE;
            report = option.bind(offset)(yankee, report);
            if(report) { _fun00006_ip = 200; continue _fun00005 }
 150:
            romeon = _closure1_slot0;
            option = _closure1_slot2;
            verify = option[verify];
            offset = romeon.bind(oscard)(verify);
            verify = offset.hasFlag;
            option = option[foxtra];
            option = romeon.bind(oscard)(option);
            option = option.GuildInviteFlags;
            option = option.IS_APPLICATION_BYPASS;
            report = verify.bind(offset)(yankee, option);
 200:
            report = !report;
            if(!report) { _fun00006_ip = 210; continue _fun00005 }
 206:
            report = golfie != zuuluu;
 210:
            if(!report) { _fun00006_ip = 244; continue _fun00005 }
 213:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            golfie = 9;
            golfie = verify[golfie];
            option = option.bind(oscard)(golfie);
            golfie = option.inviteGuildHasPendingMemberDisabledVerification;
            report = golfie.bind(option)(zuuluu);
 244:
            if(!report) { _fun00006_ip = 324; continue _fun00005 }
 247:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 9;
            tangon = golfie[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.openVerificationModalOrTransitionToApplication;
            zuuluu = zuuluu.id;
            zuuluu = tangon.bind(report)(zuuluu);
            _fun00006_ip = 324; continue _fun00005;
 285:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.onOpenHubInvite;
            entity = entity.invite;
            entity = michal.bind(zuuluu)(entity);
 324:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot8 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: GuildVerificationManager
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            entity = _closure1_slot4;
            report = _closure2_slot0;
            tangon = undefined;
            entity = entity.bind(tangon)(oscard, report);
            michal = _closure1_slot9;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = michal.bind(tangon)(oscard, report, entity);
            michal = {};
            zuuluu = _closure1_slot11;
            michal['INVITE_ACCEPT_SUCCESS'] = zuuluu;
            entity['actions'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot3;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_verification/GuildVerificationManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();