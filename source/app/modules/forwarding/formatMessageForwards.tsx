// app/modules/forwarding/formatMessageForwards.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar) { // Original name: createGuildBreadcrumb
        golfie = argFoo;
        oscard = argBar;
        entity = {};
        michal = golfie.name;
        entity['originLabel'] = michal;
        tangon = _closure1_slot1;
        verify = _closure1_slot2;
        zuuluu = 8;
        zuuluu = verify[zuuluu];
        option = undefined;
        report = tangon.bind(option)(zuuluu);
        tangon = report.getGuildIconURL;
        zuuluu = {};
        offset = golfie.id;
        zuuluu['id'] = offset;
        offset = 16;
        zuuluu['size'] = offset;
        offset = golfie.icon;
        zuuluu['icon'] = offset;
        offset = false;
        zuuluu['canAnimate'] = offset;
        zuuluu = tangon.bind(report)(zuuluu);
        entity['originIconUrl'] = zuuluu;
        entity['timestampLabel'] = oscard;
        zuuluu = _closure1_slot0;
        michal = 9;
        tangon = verify[michal];
        tangon = zuuluu.bind(option)(tangon);
        report = tangon.intl;
        tangon = report.formatToPlainString;
        michal = verify[michal];
        michal = zuuluu.bind(option)(michal);
        michal = michal.t;
        zuuluu = michal.+l04BA;
        michal = {};
        golfie = golfie.name;
        michal['origin'] = golfie;
        michal['timestamp'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        entity['accessibilityLabel'] = michal;
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo, argBar, argBaz) { // Original name: MessageForward
            zuuluu = this;
            tangon = _closure1_slot3;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = argFoo;
            zuuluu['parentMessage'] = michal;
            michal = argBar;
            zuuluu['messageSnapshot'] = michal;
            michal = argBaz;
            zuuluu['snapshotIndex'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        report = 'getForwardInfo';
        entity['key'] = report;
        michal = function() { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                yankee = arguments[0];
                backup = arguments[1];
                foxtra = arguments[2];
                offset = arguments[3];
                option = arguments[4];
                sizing = arguments[5];
                entity = this;
                oscard = undefined;
                if(!(yankee === oscard)) { _fun00002_ip = 34; continue _fun00001 }
 27:
                yankee = _closure1_slot6;
 34:
                if(!(backup === oscard)) { _fun00002_ip = 45; continue _fun00001 }
 38:
                backup = _closure1_slot10;
 45:
                if(!(foxtra === oscard)) { _fun00002_ip = 56; continue _fun00001 }
 49:
                foxtra = _closure1_slot9;
 56:
                if(!(offset === oscard)) { _fun00002_ip = 67; continue _fun00001 }
 60:
                offset = _closure1_slot8;
 67:
                if(!(option === oscard)) { _fun00002_ip = 78; continue _fun00001 }
 71:
                option = _closure1_slot7;
 78:
                if(!(sizing === oscard)) { _fun00002_ip = 89; continue _fun00001 }
 82:
                sizing = _closure1_slot5;
 89:
                zuuluu = entity.snapshotIndex;
                golfie = entity.parentMessage;
                tangon = entity.messageSnapshot;
                verify = _closure1_slot0;
                romeon = _closure1_slot2;
                report = 10;
                report = romeon[report];
                verify = verify.bind(oscard)(report);
                report = verify.calendarFormatCompact;
                tangon = tangon.message;
                tangon = tangon.timestamp;
                report = report.bind(verify)(tangon);
                tangon = yankee.getChannel;
                entity = entity.parentMessage;
                entity = entity.channel_id;
                tangon = tangon.bind(yankee)(entity);
                entity = null;
                if(!(entity != tangon)) { _fun00002_ip = 208; continue _fun00001 }
 179:
                romeon = tangon.guild_id;
                kiloes = golfie.messageReference;
                output = entity == kiloes;
                verify = undefined;
                if(output) { _fun00002_ip = 204; continue _fun00001 }
 199:
                verify = kiloes.guild_id;
 204:
                if(!(romeon !== verify)) { _fun00002_ip = 305; continue _fun00001 }
 208:
                verify = golfie.messageReference;
                kiloes = entity == verify;
                romeon = undefined;
                if(kiloes) { _fun00002_ip = 228; continue _fun00001 }
 223:
                romeon = verify.guild_id;
 228:
                if(!(entity != romeon)) { _fun00002_ip = 296; continue _fun00001 }
 232:
                verify = option.getGuild;
                kiloes = verify.bind(option)(romeon);
                if(!(entity == kiloes)) { _fun00002_ip = 256; continue _fun00001 }
 246:
                verify = sizing.getGuild;
                kiloes = verify.bind(sizing)(romeon);
 256:
                if(!(entity != kiloes)) { _fun00002_ip = 284; continue _fun00001 }
 260:
                verify = {};
                verify['snapshotIndex'] = zuuluu;
                romeon = _closure1_slot12;
                romeon = romeon.bind(oscard)(kiloes, report);
                verify['footerInfo'] = romeon;
                _fun00002_ip = 294; continue _fun00001;
 284:
                romeon = {};
                romeon['snapshotIndex'] = zuuluu;
                verify = romeon;
 294:
                return verify;
 296:
                verify = {};
                verify['snapshotIndex'] = zuuluu;
                return verify;
 305:
                verify = yankee.getChannel;
                romeon = golfie.messageReference;
                kiloes = entity == romeon;
                golfie = undefined;
                if(kiloes) { _fun00002_ip = 330; continue _fun00001 }
 325:
                golfie = romeon.channel_id;
 330:
                romeon = verify.bind(yankee)(golfie);
                if(!(entity != romeon)) { _fun00002_ip = 506; continue _fun00001 }
 342:
                verify = offset.can;
                golfie = romeon.accessPermissions;
                golfie = verify.bind(offset)(golfie, romeon);
                if(golfie) { _fun00002_ip = 372; continue _fun00001 }
 363:
                golfie = {};
                golfie['snapshotIndex'] = zuuluu;
                return golfie;
 372:
                yankee = _closure1_slot0;
                kiloes = _closure1_slot2;
                golfie = 11;
                golfie = kiloes[golfie];
                offset = yankee.bind(oscard)(golfie);
                verify = offset.computeChannelName;
                result = true;
                ctrled = offset;
                source = romeon;
                update = backup;
                echoed = foxtra;
                backup = ctrled[verify](source, update, echoed, result, output);
                golfie = {};
                golfie['snapshotIndex'] = zuuluu;
                verify = {};
                verify['originLabel'] = backup;
                verify['timestampLabel'] = report;
                offset = 9;
                romeon = kiloes[offset];
                romeon = yankee.bind(oscard)(romeon);
                foxtra = romeon.intl;
                romeon = foxtra.formatToPlainString;
                offset = kiloes[offset];
                offset = yankee.bind(oscard)(offset);
                offset = offset.t;
                yankee = offset.+l04BA;
                offset = {};
                offset['origin'] = backup;
                offset['timestamp'] = report;
                offset = romeon.bind(foxtra)(yankee, offset);
                verify['accessibilityLabel'] = offset;
                golfie['footerInfo'] = verify;
                return golfie;
 506:
                golfie = option.getGuild;
                tangon = tangon.guild_id;
                tangon = golfie.bind(option)(tangon);
                if(!(entity != tangon)) { _fun00002_ip = 549; continue _fun00001 }
 525:
                entity = {};
                entity['snapshotIndex'] = zuuluu;
                michal = _closure1_slot12;
                michal = michal.bind(oscard)(tangon, report);
                entity['footerInfo'] = michal;
                _fun00002_ip = 559; continue _fun00001;
 549:
                michal = {};
                michal['snapshotIndex'] = zuuluu;
                entity = michal;
 559:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot11 = tangon;
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/forwarding/formatMessageForwards.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['MessageForward'] = tangon;
    michal = function(argFoo) { // Original name: maybeCreateSingleForwardForMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 12;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            zuuluu = zuuluu.bind(michal)(report);
            if(!zuuluu) { _fun00004_ip = 54; continue _fun00003 }
 36:
            zuuluu = report.messageSnapshots;
            tangon = 0;
            zuuluu = zuuluu[tangon];
            oscard = null;
            if(!(oscard == zuuluu)) { _fun00004_ip = 56; continue _fun00003 }
 54:
            return michal;
 56:
            entity = _closure1_slot11;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            offset = michal;
            verify = report;
            option = zuuluu;
            golfie = 0;
            entity = new offset[entity](verify, option, golfie, oscard);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    zuuluu['maybeCreateSingleForwardForMessage'] = michal;
    return entity;
})();