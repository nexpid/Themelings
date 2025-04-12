// app/modules/rpc/server/commands/links.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = oscard;
    offset = global;
    option = offset.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    kiloes = michal.RPC_AUTHENTICATED_SCOPE;
    backup = michal.RPC_EMBEDDED_APP_SCOPE;
    foxtra = michal.RPC_SCOPE_CONFIG;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.ApplicationFlags;
    var _closure1_slot5 = tangon;
    tangon = michal.PopoutWindowKeys;
    var _closure1_slot6 = tangon;
    tangon = michal.RPCCommands;
    golfie = michal.RPCErrors;
    var _closure1_slot7 = golfie;
    michal = michal.UserSettingsSections;
    var _closure1_slot8 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    sizing = michal.AM_HARMONY_PRD_APPLICATION_ID;
    option = michal.AM_HARMONY_STG_APPLICATION_ID;
    michal = 5;
    michal = oscard[michal];
    golfie = report.bind(entity)(michal);
    verify = golfie.DISCORD_WAGONS_APPLICATION_ID;
    michal = golfie.DISCORD_WAGONS_DEV_APPLICATION_ID;
    output = golfie.DISCORD_WAGONS_QA_APPLICATION_ID;
    romeon = offset.Set;
    golfie = new Array(2);
    golfie[0] = sizing;
    golfie[1] = option;
    option = romeon.prototype;
    option = Object.create(option, {constructor: {value: romeon}});
    vacuum = option;
    ctrled = golfie;
    golfie = new vacuum[romeon](ctrled, source);
    golfie = golfie instanceof Object ? golfie : option;
    var _closure1_slot9 = golfie;
    romeon = offset.Set;
    golfie = romeon.prototype;
    option = Object.create(golfie, {constructor: {value: romeon}});
    ctrled = ['www.nytimes.com', 'apps.apple.com', 'play.google.com'];
    vacuum = option;
    golfie = new vacuum[romeon](ctrled, source);
    romeon = golfie instanceof Object ? golfie : option;
    option = offset.Map;
    golfie = new Array(2);
    golfie[0] = michal;
    michal = {};
    michal['trustedHosts'] = romeon;
    result = offset.Date;
    sizing = result.prototype;
    echoed = Object.create(sizing, {constructor: {value: result}});
    sizing = '2027-01-15T00:00:00';
    vacuum = echoed;
    ctrled = sizing;
    result = new vacuum[result](ctrled, source);
    echoed = result instanceof Object ? result : echoed;
    result = echoed.valueOf;
    result = result.bind(echoed)();
    michal['trustedUntilEpochMs'] = result;
    golfie[1] = michal;
    michal = new Array(3);
    michal[0] = golfie;
    golfie = new Array(2);
    golfie[0] = output;
    output = {};
    output['trustedHosts'] = romeon;
    result = offset.Date;
    echoed = result.prototype;
    echoed = Object.create(echoed, {constructor: {value: result}});
    vacuum = echoed;
    result = new vacuum[result](ctrled, source);
    echoed = result instanceof Object ? result : echoed;
    result = echoed.valueOf;
    result = result.bind(echoed)();
    output['trustedUntilEpochMs'] = result;
    golfie[1] = output;
    michal[1] = golfie;
    golfie = new Array(2);
    golfie[0] = verify;
    verify = {};
    verify['trustedHosts'] = romeon;
    offset = offset.Date;
    romeon = offset.prototype;
    romeon = Object.create(romeon, {constructor: {value: offset}});
    vacuum = romeon;
    offset = new vacuum[offset](ctrled, source);
    romeon = offset instanceof Object ? offset : romeon;
    offset = romeon.valueOf;
    offset = offset.bind(romeon)();
    verify['trustedUntilEpochMs'] = offset;
    golfie[1] = verify;
    michal[2] = golfie;
    golfie = option.prototype;
    golfie = Object.create(golfie, {constructor: {value: option}});
    vacuum = golfie;
    ctrled = michal;
    michal = new vacuum[option](ctrled, source);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot10 = michal;
    michal = {};
    option = tangon.OPEN_EXTERNAL_LINK;
    golfie = {};
    verify = {};
    romeon = foxtra.ANY;
    offset = new Array(2);
    offset[0] = kiloes;
    offset[1] = backup;
    verify[romeon] = offset;
    golfie['scope'] = verify;
    verify = function(argFoo) { // Original name: validation
        report = argFoo;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        entity = michal[entity];
        michal = undefined;
        entity = zuuluu.bind(michal)(entity);
        michal = entity.bind(michal)(report);
        entity = michal.required;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.keys;
        entity = {};
        tangon = report.string;
        report = tangon.bind(report)();
        tangon = report.required;
        tangon = tangon.bind(report)();
        entity['url'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    golfie['validation'] = verify;
    verify = function(argFoo) { // Original name: handler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = michal.socket;
            michal = michal.args;
            entity = michal.url;
            report = undefined;
            backup = undefined;
            golfie = undefined;
            oscard = undefined;
            var _closure2_slot0 = report;
            offset = undefined;
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            option = undefined;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 7;
            verify = romeon[verify];
            yankee = yankee.bind(report)(verify);
            verify = yankee.validatePostMessageTransport;
            tangon = tangon.transport;
            tangon = verify.bind(yankee)(tangon);
            verify = _closure1_slot3;
            tangon = verify.getCurrentEmbeddedActivity;
            backup = tangon.bind(verify)();
 100: // try_start_0
            tangon = global;
            romeon = tangon.URL;
            update = entity;
            yankee = romeon.prototype;
            yankee = Object.create(yankee, {constructor: {value: romeon}});
            source = yankee;
            verify = new source[romeon](update, echoed);
            yankee = verify instanceof Object ? verify : yankee;
            golfie = yankee;
            verify = yankee.toString;
            verify = verify.bind(yankee)();
            oscard = verify;
            _closure2_slot0 = verify;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 8;
            verify = romeon[verify];
            verify = yankee.bind(report)(verify);
            verify = verify.isPlatformEmbedded;
            if(!verify) { _fun00002_ip = 332; continue _fun00001 }
 182:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 9;
            verify = romeon[verify];
            romeon = yankee.bind(report)(verify);
            yankee = romeon.shouldOpenActivityInPopoutWindow;
            verify = {};
            kiloes = backup;
            foxtra = null;
            kiloes = foxtra == kiloes;
            sizing = undefined;
            if(kiloes) { _fun00002_ip = 237; continue _fun00001 }
 224:
            kiloes = backup;
            kiloes = kiloes.location;
            sizing = kiloes.kind;
 237:
            output = _closure1_slot0;
            result = _closure1_slot2;
            kiloes = 10;
            kiloes = result[kiloes];
            kiloes = output.bind(report)(kiloes);
            kiloes = kiloes.EmbeddedActivityLocationKind;
            kiloes = kiloes.CONTEXTLESS;
            kiloes = sizing === kiloes;
            verify['isContextless'] = kiloes;
            verify = yankee.bind(romeon)(verify);
            foxtra = null;
            if(!verify) { _fun00002_ip = 298; continue _fun00001 }
 288:
            verify = _closure1_slot6;
            foxtra = verify.ACTIVITY_POPOUT;
 298:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 11;
            verify = romeon[verify];
            romeon = yankee.bind(report)(verify);
            yankee = romeon.focus;
            verify = true;
            verify = yankee.bind(romeon)(foxtra, verify);
 332:
            foxtra = _closure1_slot4;
            romeon = foxtra.getApplication;
            verify = backup;
            yankee = null;
            kiloes = yankee == verify;
            verify = undefined;
            if(kiloes) { _fun00002_ip = 364; continue _fun00001 }
 356:
            kiloes = backup;
            verify = kiloes.applicationId;
 364:
            verify = romeon.bind(foxtra)(verify);
            offset = verify;
            _closure2_slot1 = verify;
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            verify = 12;
            verify = foxtra[verify];
            foxtra = romeon.bind(report)(verify);
            romeon = foxtra.getEmbeddedActivityLocationChannelId;
            verify = backup;
            kiloes = yankee == verify;
            verify = undefined;
            if(kiloes) { _fun00002_ip = 419; continue _fun00001 }
 414:
            verify = backup.location;
 419:
            verify = romeon.bind(foxtra)(verify);
            _closure2_slot2 = verify;
            verify = offset;
            verify = yankee == verify;
            yankee = undefined;
            if(verify) { _fun00002_ip = 448; continue _fun00001 }
 440:
            verify = offset;
            yankee = verify.id;
 448:
            verify = undefined;
            if(!(verify !== yankee)) { _fun00002_ip = 473; continue _fun00001 }
 454:
            romeon = _closure1_slot10;
            yankee = romeon.get;
            offset = offset.id;
            verify = yankee.bind(romeon)(offset);
 473:
            option = verify;
            if(!(report !== verify)) { _fun00002_ip = 533; continue _fun00001 }
 480:
            verify = option;
            offset = verify.trustedUntilEpochMs;
            yankee = tangon.Date;
            verify = yankee.now;
            verify = verify.bind(yankee)();
            if(!(offset >= verify)) { _fun00002_ip = 533; continue _fun00001 }
 508:
            verify = option.trustedHosts;
            option = verify.has;
            golfie = golfie.host;
            golfie = option.bind(verify)(golfie);
            if(golfie) { _fun00002_ip = 568; continue _fun00001 }
 533:
            option = tangon.Promise;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            update = function(argFoo) {
                michal = argFoo;
                var _closure3_slot0 = michal;
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 14;
                michal = golfie[michal];
                report = undefined;
                tangon = oscard.bind(report)(michal);
                zuuluu = tangon.handleClick;
                michal = {};
                verify = _closure2_slot0;
                michal['href'] = verify;
                verify = true;
                michal['shouldConfirm'] = verify;
                verify = function() { // Original name: onConfirm
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = _closure2_slot0;
                    michal = zuuluu.bind(entity)(michal);
                    zuuluu = _closure3_slot0;
                    michal = {};
                    tangon = true;
                    michal['opened'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal['onConfirm'] = verify;
                entity = function() { // Original name: onCancel
                    zuuluu = _closure3_slot0;
                    michal = {};
                    entity = false;
                    michal['opened'] = entity;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal['onCancel'] = entity;
                entity = 15;
                entity = golfie[entity];
                golfie = oscard.bind(report)(entity);
                oscard = golfie.getActivitiesModalContextKey;
                entity = {};
                verify = _closure2_slot1;
                entity['application'] = verify;
                option = _closure2_slot2;
                entity['channelId'] = option;
                offset = oscard.bind(golfie)(entity);
                backup = tangon;
                foxtra = michal;
                romeon = undefined;
                yankee = undefined;
                entity = backup[zuuluu](foxtra, romeon, yankee, offset, verify);
                return entity;
            };
            source = golfie;
            zuuluu = new source[option](update, echoed);
            zuuluu = zuuluu instanceof Object ? zuuluu : golfie;
            _fun00002_ip = 619; continue _fun00001;
 568:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 13;
            golfie = verify[golfie];
            golfie = option.bind(report)(golfie);
            oscard = golfie.bind(report)(oscard);
            golfie = tangon.Promise;
            oscard = golfie.resolve;
            tangon = {};
            option = true;
            tangon['opened'] = option;
            zuuluu = oscard.bind(golfie)(tangon);
 619: // try_end0
            return zuuluu;
 621: // catch_target0
            CatchBlockStart(arg_register=2);
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 16;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {};
            michal = _closure1_slot7;
            michal = michal.INVALID_COMMAND;
            zuuluu['errorCode'] = michal;
            report = entity;
            entity = global;
            entity = entity.HermesInternal;
            michal = entity.concat;
            entity = 'Invalid URL: ';
            echoed = michal.bind(entity)(report);
            michal = tangon.prototype;
            michal = Object.create(michal, {constructor: {value: tangon}});
            source = michal;
            update = zuuluu;
            entity = new source[tangon](update, echoed, result);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    golfie['handler'] = verify;
    michal[option] = golfie;
    option = tangon.NAVIGATE_TO_CONNECTIONS;
    golfie = {};
    verify = function(argFoo) { // Original name: validation
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 6;
        entity = zuuluu[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    golfie['validation'] = verify;
    verify = {};
    romeon = foxtra.ANY;
    offset = new Array(1);
    offset[0] = kiloes;
    verify[romeon] = offset;
    golfie['scope'] = verify;
    verify = function(argFoo) { // Original name: handler
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.socket;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 7;
            golfie = oscard[zuuluu];
            entity = undefined;
            verify = report.bind(entity)(golfie);
            option = verify.validatePostMessageTransport;
            golfie = michal.transport;
            golfie = option.bind(verify)(golfie);
            zuuluu = oscard[zuuluu];
            report = report.bind(entity)(zuuluu);
            zuuluu = report.validateApplication;
            michal = michal.application;
            report = zuuluu.bind(report)(michal);
            zuuluu = _closure1_slot9;
            michal = zuuluu.has;
            michal = michal.bind(zuuluu)(report);
            if(michal) { _fun00004_ip = 161; continue _fun00003 }
 93:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 16;
            michal = report[michal];
            oscard = zuuluu.bind(entity)(michal);
            report = {};
            michal = _closure1_slot7;
            michal = michal.UNAUTHORIZED_FOR_APPLICATION;
            report['errorCode'] = michal;
            michal = oscard.prototype;
            zuuluu = Object.create(michal, {constructor: {value: oscard}});
            offset = 'Command not available for this application';
            romeon = zuuluu;
            yankee = report;
            michal = new romeon[oscard](yankee, offset, verify);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 161:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 17;
            michal = report[michal];
            michal = zuuluu.bind(entity)(michal);
            zuuluu = michal.openUserSettings;
            michal = {};
            tangon = _closure1_slot8;
            tangon = tangon.CONNECTIONS;
            michal['screen'] = tangon;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    golfie['handler'] = verify;
    michal[option] = golfie;
    golfie = tangon.SHARE_LINK;
    option = 18;
    option = oscard[option];
    offset = report.bind(entity)(option);
    verify = offset.createRPCCommand;
    option = tangon.SHARE_LINK;
    tangon = {};
    romeon = {};
    backup = foxtra.ANY;
    foxtra = new Array(1);
    foxtra[0] = kiloes;
    romeon[backup] = foxtra;
    tangon['scope'] = romeon;
    yankee = function(argFoo) { // Original name: handler
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.socket;
            entity = entity.args;
            tangon = entity.custom_id;
            var _closure2_slot0 = tangon;
            tangon = entity.message;
            var _closure2_slot1 = tangon;
            entity = entity.link_id;
            var _closure2_slot2 = entity;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 7;
            option = golfie[report];
            tangon = undefined;
            offset = oscard.bind(tangon)(option);
            verify = offset.validatePostMessageTransport;
            option = zuuluu.transport;
            option = verify.bind(offset)(option);
            report = golfie[report];
            golfie = oscard.bind(tangon)(report);
            oscard = golfie.validateApplication;
            report = zuuluu.application;
            oscard = oscard.bind(golfie)(report);
            var _closure2_slot3 = oscard;
            report = null;
            if(!(report != oscard)) { _fun00006_ip = 298; continue _fun00005 }
 126:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 19;
            oscard = option[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = golfie.hasFlag;
            zuuluu = zuuluu.application;
            zuuluu = zuuluu.flags;
            option = report != zuuluu;
            report = 0;
            if(!option) { _fun00006_ip = 174; continue _fun00005 }
 171:
            report = zuuluu;
 174:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.EMBEDDED;
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            if(zuuluu) { _fun00006_ip = 261; continue _fun00005 }
 193:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 16;
            zuuluu = oscard[zuuluu];
            golfie = report.bind(tangon)(zuuluu);
            oscard = {};
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.INVALID_COMMAND;
            oscard['errorCode'] = zuuluu;
            zuuluu = golfie.prototype;
            report = Object.create(zuuluu, {constructor: {value: golfie}});
            yankee = 'This application cannot access this API';
            foxtra = report;
            romeon = oscard;
            zuuluu = new foxtra[golfie](romeon, yankee, offset);
            zuuluu = zuuluu instanceof Object ? zuuluu : report;
            throw zuuluu;
 261:
            zuuluu = global;
            report = zuuluu.Promise;
            zuuluu = report.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: report}});
            romeon = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 20;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.openActivityShareLinkModal;
                michal = {};
                golfie = _closure2_slot3;
                michal['applicationId'] = golfie;
                golfie = _closure2_slot0;
                michal['customId'] = golfie;
                golfie = _closure2_slot2;
                michal['linkId'] = golfie;
                oscard = _closure2_slot1;
                michal['message'] = oscard;
                report = function(argFoo, argBar) { // Original name: onShare
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        tangon = argBar;
                        zuuluu = _closure3_slot0;
                        michal = {};
                        report = tangon;
                        if(report) { _fun00008_ip = 24; continue _fun00007 }
 21:
                        report = entity;
 24:
                        michal['success'] = report;
                        michal['didCopyLink'] = tangon;
                        michal['didSendMessage'] = entity;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    }
                };
                michal['onShare'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            foxtra = zuuluu;
            michal = new foxtra[report](romeon, yankee);
            michal = michal instanceof Object ? michal : zuuluu;
            return michal;
 298:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 16;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = {};
            entity = _closure1_slot7;
            entity = entity.INVALID_COMMAND;
            zuuluu['errorCode'] = entity;
            entity = tangon.prototype;
            michal = Object.create(entity, {constructor: {value: tangon}});
            yankee = 'No application.';
            foxtra = michal;
            romeon = zuuluu;
            entity = new foxtra[tangon](romeon, yankee, offset);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    tangon['handler'] = yankee;
    tangon = verify.bind(offset)(option, tangon);
    michal[golfie] = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/commands/links.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();