// app/modules/guild_mod_dash_member_safety/GuildMemberSafetyMembers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    entity = function(argFoo) { // Original name: getGuildMemberSecondaryIndexes
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = zuuluu.isCurrentGuildMemberByTimestamp;
            entity = _closure1_slot7;
            if(tangon) { _fun00002_ip = 27; continue _fun00001 }
 19:
            tangon = entity.NEW_GUILD_MEMBER;
            _fun00002_ip = 33; continue _fun00001;
 27:
            tangon = entity.CURRENT_GUILD_MEMBER;
 33:
            entity = new Array(1);
            entity[0] = tangon;
            zuuluu = zuuluu.isIncludedInSearchResults;
            if(!zuuluu) { _fun00002_ip = 70; continue _fun00001 }
 50:
            zuuluu = entity.push;
            michal = _closure1_slot7;
            michal = michal.INCLUDED_IN_SEARCH_RESULTS;
            michal = zuuluu.bind(entity)(michal);
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: getGuildMemberSecondarySortBy
        entity = argFoo;
        entity = entity.sort;
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: createMembersMap
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        tangon = michal.SecondaryIndexMap;
        oscard = _closure1_slot8;
        report = _closure1_slot9;
        michal = tangon.prototype;
        michal = Object.create(michal, {constructor: {value: tangon}});
        golfie = michal;
        entity = new golfie[tangon](oscard, report, tangon);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    var _closure1_slot10 = entity;
    tangon = function(argFoo) { // Original name: hasUnusualDmActivity
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00004_ip = 96; continue _fun00003 }
 12:
            michal = global;
            michal = michal.Date;
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            option = zuuluu;
            golfie = tangon;
            michal = new option[michal](golfie, oscard);
            zuuluu = michal instanceof Object ? michal : zuuluu;
            michal = zuuluu.getTime;
            zuuluu = michal.bind(zuuluu)();
            tangon = _closure1_slot6;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            michal = 4;
            report = report[michal];
            michal = undefined;
            michal = oscard.bind(michal)(report);
            michal = michal.UNUSUAL_DM_COMPARISON_DELTA;
            michal = tangon - michal;
            entity = zuuluu >= michal;
 96:
            return entity;
        }
    };
    var _closure1_slot11 = tangon;
    report = global;
    yankee = report.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = report.Date;
    report = oscard.now;
    report = report.bind(oscard)();
    var _closure1_slot6 = report;
    report = {};
    oscard = 'NEW_GUILD_MEMBER';
    report['NEW_GUILD_MEMBER'] = oscard;
    oscard = 'CURRENT_GUILD_MEMBER';
    report['CURRENT_GUILD_MEMBER'] = oscard;
    oscard = 'INCLUDED_IN_SEARCH_RESULTS';
    report['INCLUDED_IN_SEARCH_RESULTS'] = oscard;
    var _closure1_slot7 = report;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo) { // Original name: GuildMemberSafetyMembers
            zuuluu = this;
            report = _closure1_slot3;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = global;
            report = tangon.Date;
            tangon = report.now;
            tangon = tangon.bind(report)();
            zuuluu['newMemberTimestamp'] = tangon;
            tangon = argFoo;
            zuuluu['guildId'] = tangon;
            michal = _closure1_slot10;
            michal = michal.bind(entity)();
            zuuluu['_membersMap'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'reset';
        entity['key'] = michal;
        michal = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu._membersMap;
            entity = michal.clear;
            entity = entity.bind(michal)();
            michal = _closure1_slot10;
            entity = undefined;
            michal = michal.bind(entity)();
            zuuluu['_membersMap'] = michal;
            michal = zuuluu.resetNewMemberTimestamp;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(11);
        michal[0] = entity;
        entity = {};
        oscard = 'resetNewMemberTimestamp';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = global;
            michal = entity.Date;
            entity = michal.now;
            michal = entity.bind(michal)();
            entity = this;
            entity['newMemberTimestamp'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'enhanceNewMember';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                golfie = argFoo;
                michal = arguments[2];
                zuuluu = this;
                offset = undefined;
                if(!(michal === offset)) { _fun00006_ip = 17; continue _fun00005 }
 15:
                michal = {};
 17:
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 5;
                entity = oscard[entity];
                verify = report.bind(offset)(entity);
                tangon = verify.getJoinedAtTimestamp;
                entity = golfie.joinedAt;
                tangon = tangon.bind(verify)(entity);
                yankee = zuuluu._computeMemberSupplementals;
                verify = golfie.userId;
                entity = golfie.unusualDMActivityUntil;
                entity = yankee.bind(zuuluu)(verify, entity);
                sizing = entity.hasUnusualDmActivity;
                kiloes = entity.hasUnusualAccountActivity;
                backup = entity.sourceInviteCode;
                foxtra = entity.joinSourceType;
                romeon = entity.inviterId;
                yankee = entity.integrationType;
                output = _closure1_slot5;
                verify = output.getUser;
                entity = golfie.userId;
                verify = verify.bind(output)(entity);
                entity = {};
                entity['hasUnusualDmActivity'] = sizing;
                entity['hasUnusualAccountActivity'] = kiloes;
                entity['sourceInviteCode'] = backup;
                entity['joinSourceType'] = foxtra;
                entity['inviterId'] = romeon;
                entity['integrationType'] = yankee;
                echoed = entity;
                result = golfie;
                yankee = copyDataProperties(echoed, result);
                zuuluu = zuuluu.newMemberTimestamp;
                yankee = tangon <= zuuluu;
                zuuluu = 'isCurrentGuildMemberByTimestamp';
                entity[zuuluu] = yankee;
                yankee = false;
                zuuluu = 'isIncludedInSearchResults';
                entity[zuuluu] = yankee;
                zuuluu = 'user';
                entity[zuuluu] = verify;
                zuuluu = 6;
                zuuluu = oscard[zuuluu];
                oscard = report.bind(offset)(zuuluu);
                report = oscard.getSortValueForMember;
                zuuluu = argBar;
                zuuluu = zuuluu.selectedSort;
                verify = null;
                if(!(verify == zuuluu)) { _fun00006_ip = 282; continue _fun00005 }
 250:
                verify = _closure1_slot0;
                yankee = _closure1_slot2;
                option = 4;
                option = yankee[option];
                option = verify.bind(offset)(option);
                option = option.OrderBy;
                zuuluu = option.ORDER_BY_UNSPECIFIED;
 282:
                report = report.bind(oscard)(golfie, zuuluu);
                zuuluu = 'sort';
                entity[zuuluu] = report;
                zuuluu = 'joinedAtTimestamp';
                entity[zuuluu] = tangon;
                echoed = entity;
                result = michal;
                michal = copyDataProperties(echoed, result);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = '_computeMemberSupplementals';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                entity = 7;
                entity = report[entity];
                report = undefined;
                oscard = zuuluu.bind(report)(entity);
                zuuluu = oscard.getMemberSupplementalByGuildId;
                entity = this;
                entity = entity.guildId;
                entity = zuuluu.bind(oscard)(entity);
                entity = entity[tangon];
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00008_ip = 59; continue _fun00007 }
 57:
                entity = {};
 59:
                offset = entity.sourceInviteCode;
                verify = entity.joinSourceType;
                option = entity.inviterId;
                oscard = entity.integrationType;
                entity = {};
                yankee = zuuluu != offset;
                golfie = null;
                if(!yankee) { _fun00008_ip = 97; continue _fun00007 }
 94:
                golfie = offset;
 97:
                entity['sourceInviteCode'] = golfie;
                offset = zuuluu != verify;
                golfie = null;
                if(!offset) { _fun00008_ip = 114; continue _fun00007 }
 111:
                golfie = verify;
 114:
                entity['joinSourceType'] = golfie;
                verify = zuuluu != option;
                golfie = null;
                if(!verify) { _fun00008_ip = 131; continue _fun00007 }
 128:
                golfie = option;
 131:
                entity['inviterId'] = golfie;
                golfie = zuuluu != oscard;
                zuuluu = null;
                if(!golfie) { _fun00008_ip = 148; continue _fun00007 }
 145:
                zuuluu = oscard;
 148:
                entity['integrationType'] = zuuluu;
                oscard = _closure1_slot11;
                zuuluu = argBar;
                zuuluu = oscard.bind(report)(zuuluu);
                entity['hasUnusualDmActivity'] = zuuluu;
                zuuluu = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 8;
                michal = oscard[michal];
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.isSpammer;
                michal = michal.bind(zuuluu)(tangon);
                entity['hasUnusualAccountActivity'] = michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'createMember';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            tangon = argFoo;
            entity = this;
            zuuluu = entity._membersMap;
            michal = zuuluu.set;
            entity = tangon.userId;
            entity = michal.bind(zuuluu)(entity, tangon);
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'updateMember';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argFoo;
                michal = argBar;
                entity = this;
                oscard = null;
                if(!(oscard != michal)) { _fun00010_ip = 317; continue _fun00009 }
 18:
                golfie = {};
                ctrled = golfie;
                source = tangon;
                zuuluu = copyDataProperties(ctrled, source);
                kiloes = {};
                ctrled = kiloes;
                source = michal;
                michal = copyDataProperties(ctrled, source);
                report = entity._computeMemberSupplementals;
                zuuluu = golfie.userId;
                michal = kiloes.unusualDMActivityUntil;
                if(!(oscard == michal)) { _fun00010_ip = 69; continue _fun00009 }
 63:
                michal = golfie.unusualDMActivityUntil;
 69:
                michal = report.bind(entity)(zuuluu, michal);
                verify = michal.sourceInviteCode;
                option = michal.hasUnusualDmActivity;
                oscard = michal.hasUnusualAccountActivity;
                report = michal.joinSourceType;
                zuuluu = michal.inviterId;
                michal = michal.integrationType;
                offset = golfie.sourceInviteCode;
                if(!(offset !== verify)) { _fun00010_ip = 127; continue _fun00009 }
 121:
                kiloes['sourceInviteCode'] = verify;
 127:
                verify = golfie.hasUnusualDmActivity;
                if(!(verify !== option)) { _fun00010_ip = 143; continue _fun00009 }
 137:
                kiloes['hasUnusualDmActivity'] = option;
 143:
                option = golfie.hasUnusualAccountActivity;
                if(!(option !== oscard)) { _fun00010_ip = 159; continue _fun00009 }
 153:
                kiloes['hasUnusualAccountActivity'] = oscard;
 159:
                oscard = golfie.joinSourceType;
                if(!(oscard !== report)) { _fun00010_ip = 175; continue _fun00009 }
 169:
                kiloes['joinSourceType'] = report;
 175:
                report = golfie.inviterId;
                if(!(report !== zuuluu)) { _fun00010_ip = 191; continue _fun00009 }
 185:
                kiloes['inviterId'] = zuuluu;
 191:
                zuuluu = golfie.integrationType;
                if(!(zuuluu !== michal)) { _fun00010_ip = 207; continue _fun00009 }
 201:
                kiloes['integrationType'] = michal;
 207:
                foxtra = kiloes;
                michal = false;
                oscard = 9;
                report = undefined;
                zuuluu = false;
                for(offset in foxtra)
 230:
                {
                    zuuluu = michal;
 242:
                    output = offset;
                    sizing = kiloes[output];
                    echoed = golfie[output];
                    update = _closure1_slot1;
                    result = _closure1_slot2;
                    result = result[oscard];
                    result = update.bind(report)(result);
                    result = result.bind(report)(sizing, echoed);
                    if(result) { _fun00010_ip = 230; continue _fun00009 }
 279:
                    golfie[output] = sizing;
                    michal = true;
                    _fun00010_ip = 230; continue _fun00009;
                }
 287:
                oscard = entity._membersMap;
                report = oscard.set;
                michal = golfie.userId;
                michal = report.bind(oscard)(michal, golfie);
                if(michal) { _fun00010_ip = 315; continue _fun00009 }
 312:
                michal = zuuluu;
 315:
                return michal;
 317:
                zuuluu = entity._membersMap;
                michal = zuuluu.set;
                entity = tangon.userId;
                entity = michal.bind(zuuluu)(entity, tangon);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'removeMember';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity._membersMap;
            michal = zuuluu.delete;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'getMemberByUserId';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity._membersMap;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'values';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            tangon = entity._membersMap;
            zuuluu = tangon.values;
            michal = argFoo;
            entity = true;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'count';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity._membersMap;
            michal = zuuluu.size;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'version';
        entity['key'] = oscard;
        report = function() { // Original name: get
            entity = this;
            entity = entity._membersMap;
            entity = entity.version;
            return entity;
        };
        entity['get'] = report;
        michal[10] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    oscard = 10;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_mod_dash_member_safety/GuildMemberSafetyMembers.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['MemberSafetySecondaryIndex'] = report;
    zuuluu['hasUnusualDmActivity'] = tangon;
    zuuluu['GuildMemberSafetyMembers'] = michal;
    return entity;
})();