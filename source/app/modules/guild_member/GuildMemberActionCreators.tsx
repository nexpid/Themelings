// app/modules/guild_member/GuildMemberActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_member/GuildMemberActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: updateGuildSelfMember
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            oscard = argBar;
            option = arguments[2];
            entity = undefined;
            if(!(option === entity)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            option = false;
 17:
            tangon = _closure1_slot3;
            zuuluu = tangon.isFullServerPreview;
            zuuluu = zuuluu.bind(tangon)(report);
            if(zuuluu) { _fun00002_ip = 186; continue _fun00001 }
 41:
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 3;
            zuuluu = golfie[zuuluu];
            verify = tangon.bind(entity)(zuuluu);
            tangon = verify.dispatch;
            zuuluu = {};
            offset = 'GUILD_MEMBER_UPDATE_LOCAL';
            zuuluu['type'] = offset;
            zuuluu['guildId'] = report;
            offset = oscard.roles;
            zuuluu['roles'] = offset;
            offset = oscard.flags;
            zuuluu['flags'] = offset;
            zuuluu = tangon.bind(verify)(zuuluu);
            tangon = _closure1_slot0;
            zuuluu = 4;
            zuuluu = golfie[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            golfie = zuuluu.HTTP;
            tangon = golfie.patch;
            zuuluu = {};
            offset = _closure1_slot4;
            verify = offset.SET_GUILD_MEMBER;
            verify = verify.bind(offset)(report);
            zuuluu['url'] = verify;
            zuuluu['body'] = oscard;
            verify = !option;
            option = !verify;
            if(!verify) { _fun00002_ip = 168; continue _fun00001 }
 166:
            option = undefined;
 168:
            zuuluu['oldFormErrors'] = option;
            option = false;
            zuuluu['rejectWithError'] = option;
            zuuluu = tangon.bind(golfie)(zuuluu);
            return zuuluu;
 186:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 2;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.updateImpersonatedData;
            michal = {};
            michal['memberOptions'] = oscard;
            michal = zuuluu.bind(tangon)(report, michal);
            return entity;
        }
    };
    zuuluu['updateGuildSelfMember'] = michal;
    return entity;
})();