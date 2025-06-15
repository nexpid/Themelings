// app/modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useGuildInviteSendStates;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.InviteSendStates;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.row;
            var _closure2_slot0 = entity;
            zuuluu = michal.recipientId;
            var _closure2_slot1 = zuuluu;
            zuuluu = michal.source;
            var _closure2_slot2 = zuuluu;
            report = michal.style;
            offset = entity.guild;
            var _closure2_slot3 = offset;
            zuuluu = _closure1_slot4;
            tangon = undefined;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = argFoo;
                    zuuluu = entity[zuuluu];
                    entity = null;
                    tangon = entity == zuuluu;
                    entity = undefined;
                    if(tangon) { _fun00004_ip = 38; continue _fun00003 }
 25:
                    michal = _closure2_slot3;
                    michal = michal.id;
                    entity = zuuluu[michal];
 38:
                    return entity;
                }
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            oscard = function() { // Original name: handlePress
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 5;
                michal = michal[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.sendGuildInvite;
                tangon = _closure2_slot1;
                zuuluu = _closure2_slot3;
                zuuluu = zuuluu.id;
                michal = _closure2_slot2;
                michal = report.bind(oscard)(tangon, zuuluu, michal);
                return entity;
            };
            yankee = _closure1_slot6;
            foxtra = _closure1_slot1;
            sizing = _closure1_slot2;
            michal = 6;
            michal = sizing[michal];
            golfie = foxtra.bind(tangon)(michal);
            michal = {};
            michal['sendState'] = zuuluu;
            michal['onPressSend'] = oscard;
            verify = yankee.bind(tangon)(golfie, michal);
            golfie = _closure1_slot3;
            michal = {'importantForAccessibility': 'no-hide-descendants', 'accessibilityElementsHidden': true};
            backup = 7;
            romeon = sizing[backup];
            foxtra = foxtra.bind(tangon)(romeon);
            romeon = {};
            romeon['guild'] = offset;
            kiloes = _closure1_slot0;
            backup = sizing[backup];
            backup = kiloes.bind(tangon)(backup);
            backup = backup.GuildIconSizes;
            backup = backup.SMALL;
            romeon['size'] = backup;
            romeon = yankee.bind(tangon)(foxtra, romeon);
            michal['children'] = romeon;
            yankee = yankee.bind(tangon)(golfie, michal);
            michal = _closure1_slot5;
            michal = michal.SENDING;
            golfie = zuuluu === michal;
            if(golfie) { _fun00002_ip = 226; continue _fun00001 }
 212:
            michal = _closure1_slot5;
            michal = michal.SENT;
            golfie = zuuluu === michal;
 226:
            zuuluu = _closure1_slot6;
            michal = _closure1_slot0;
            romeon = _closure1_slot2;
            entity = 8;
            entity = romeon[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.FormRow;
            entity = {};
            entity['leading'] = yankee;
            offset = offset.name;
            entity['label'] = offset;
            entity['trailing'] = verify;
            option = function() { // Original name: subLabel
                tangon = _closure1_slot6;
                oscard = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 9;
                entity = verify[entity];
                zuuluu = undefined;
                entity = oscard.bind(zuuluu)(entity);
                michal = entity.Text;
                entity = {'variant': 'text-xs/medium', 'color': 'header-secondary'};
                report = 10;
                golfie = verify[report];
                golfie = oscard.bind(zuuluu)(golfie);
                option = golfie.intl;
                golfie = option.format;
                report = verify[report];
                report = oscard.bind(zuuluu)(report);
                report = report.t;
                oscard = report.zRl6XV;
                report = {};
                verify = _closure2_slot0;
                verify = verify.memberCount;
                report['count'] = verify;
                report = golfie.bind(option)(oscard, report);
                entity['children'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            entity['subLabel'] = option;
            entity['onPress'] = oscard;
            entity['disabled'] = golfie;
            oscard = {};
            oscard['disabled'] = golfie;
            entity['accessibilityState'] = oscard;
            entity['style'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();