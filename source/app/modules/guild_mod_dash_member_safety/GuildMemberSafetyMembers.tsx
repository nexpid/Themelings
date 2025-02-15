// app/modules/guild_mod_dash_member_safety/GuildMemberSafetyMembers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    entity = function(argFoo) { // Original name: getGuildMemberSecondaryIndexes
        _fun59256: for(var _fun59256_ip = 0; ; ) switch(_fun59256_ip) {
 0:
            zulu = argFoo;
            tango = zulu.isCurrentGuildMemberByTimestamp;
            entity = _closure1_slot7;
            if(tango) { _fun59256_ip = 27; continue _fun59256 }
 19:
            tango = entity.NEW_GUILD_MEMBER;
            _fun59256_ip = 33; continue _fun59256;
 27:
            tango = entity.CURRENT_GUILD_MEMBER;
 33:
            entity = new Array(1);
            entity[0] = tango;
            zulu = zulu.isIncludedInSearchResults;
            if(!zulu) { _fun59256_ip = 70; continue _fun59256 }
 50:
            zulu = entity.push;
            mike = _closure1_slot7;
            mike = mike.INCLUDED_IN_SEARCH_RESULTS;
            mike = zulu.bind(entity)(mike);
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
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 3;
        zulu = zulu[mike];
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        tango = mike.SecondaryIndexMap;
        oscar = _closure1_slot8;
        report = _closure1_slot9;
        mike = tango.prototype;
        mike = Object.create(mike, {constructor: {value: tango}});
        golf = mike;
        entity = new golf[tango](oscar, report, tango);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    var _closure1_slot10 = entity;
    tango = function(argFoo) { // Original name: hasUnusualDmActivity
        _fun59259: for(var _fun59259_ip = 0; ; ) switch(_fun59259_ip) {
 0:
            tango = argFoo;
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun59259_ip = 96; continue _fun59259 }
 12:
            mike = global;
            mike = mike.Date;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            options = zulu;
            golf = tango;
            mike = new options[mike](golf, oscar);
            zulu = mike instanceof Object ? mike : zulu;
            mike = zulu.getTime;
            zulu = mike.bind(zulu)();
            tango = _closure1_slot6;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            mike = 4;
            report = report[mike];
            mike = undefined;
            mike = oscar.bind(mike)(report);
            mike = mike.UNUSUAL_DM_COMPARISON_DELTA;
            mike = tango - mike;
            entity = zulu >= mike;
 96:
            return entity;
        }
    };
    var _closure1_slot11 = tango;
    report = global;
    yankee = report.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = report.Date;
    report = oscar.now;
    report = report.bind(oscar)();
    var _closure1_slot6 = report;
    report = {};
    oscar = 'NEW_GUILD_MEMBER';
    report['NEW_GUILD_MEMBER'] = oscar;
    oscar = 'CURRENT_GUILD_MEMBER';
    report['CURRENT_GUILD_MEMBER'] = oscar;
    oscar = 'INCLUDED_IN_SEARCH_RESULTS';
    report['INCLUDED_IN_SEARCH_RESULTS'] = oscar;
    var _closure1_slot7 = report;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: GuildMemberSafetyMembers
            zulu = this;
            report = _closure1_slot3;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = global;
            report = tango.Date;
            tango = report.now;
            tango = tango.bind(report)();
            zulu['newMemberTimestamp'] = tango;
            tango = argFoo;
            zulu['guildId'] = tango;
            mike = _closure1_slot10;
            mike = mike.bind(entity)();
            zulu['_membersMap'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'reset';
        entity['key'] = mike;
        mike = function() { // Original name: value
            zulu = this;
            mike = zulu._membersMap;
            entity = mike.clear;
            entity = entity.bind(mike)();
            mike = _closure1_slot10;
            entity = undefined;
            mike = mike.bind(entity)();
            zulu['_membersMap'] = mike;
            mike = zulu.resetNewMemberTimestamp;
            mike = mike.bind(zulu)();
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(11);
        mike[0] = entity;
        entity = {};
        oscar = 'resetNewMemberTimestamp';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = global;
            mike = entity.Date;
            entity = mike.now;
            mike = entity.bind(mike)();
            entity = this;
            entity['newMemberTimestamp'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'enhanceNewMember';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun59264: for(var _fun59264_ip = 0; ; ) switch(_fun59264_ip) {
 0:
                golf = argFoo;
                mike = arguments[2];
                zulu = this;
                offset = undefined;
                if(!(mike === offset)) { _fun59264_ip = 17; continue _fun59264 }
 15:
                mike = {};
 17:
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 5;
                entity = oscar[entity];
                verify = report.bind(offset)(entity);
                tango = verify.getJoinedAtTimestamp;
                entity = golf.joinedAt;
                tango = tango.bind(verify)(entity);
                yankee = zulu._computeMemberSupplementals;
                verify = golf.userId;
                entity = golf.unusualDMActivityUntil;
                entity = yankee.bind(zulu)(verify, entity);
                sizing = entity.hasUnusualDmActivity;
                kilo = entity.hasUnusualAccountActivity;
                backup = entity.sourceInviteCode;
                foxtrot = entity.joinSourceType;
                romeo = entity.inviterId;
                yankee = entity.integrationType;
                output = _closure1_slot5;
                verify = output.getUser;
                entity = golf.userId;
                verify = verify.bind(output)(entity);
                entity = {};
                entity['hasUnusualDmActivity'] = sizing;
                entity['hasUnusualAccountActivity'] = kilo;
                entity['sourceInviteCode'] = backup;
                entity['joinSourceType'] = foxtrot;
                entity['inviterId'] = romeo;
                entity['integrationType'] = yankee;
                echo = entity;
                result = golf;
                yankee = copyDataProperties(echo, result);
                zulu = zulu.newMemberTimestamp;
                yankee = tango <= zulu;
                zulu = 'isCurrentGuildMemberByTimestamp';
                entity[zulu] = yankee;
                yankee = false;
                zulu = 'isIncludedInSearchResults';
                entity[zulu] = yankee;
                zulu = 'user';
                entity[zulu] = verify;
                zulu = 6;
                zulu = oscar[zulu];
                oscar = report.bind(offset)(zulu);
                report = oscar.getSortValueForMember;
                zulu = argBar;
                zulu = zulu.selectedSort;
                verify = null;
                if(!(verify == zulu)) { _fun59264_ip = 282; continue _fun59264 }
 250:
                verify = _closure1_slot0;
                yankee = _closure1_slot2;
                options = 4;
                options = yankee[options];
                options = verify.bind(offset)(options);
                options = options.OrderBy;
                zulu = options.ORDER_BY_UNSPECIFIED;
 282:
                report = report.bind(oscar)(golf, zulu);
                zulu = 'sort';
                entity[zulu] = report;
                zulu = 'joinedAtTimestamp';
                entity[zulu] = tango;
                echo = entity;
                result = mike;
                mike = copyDataProperties(echo, result);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = '_computeMemberSupplementals';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun59265: for(var _fun59265_ip = 0; ; ) switch(_fun59265_ip) {
 0:
                tango = argFoo;
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                entity = 7;
                entity = report[entity];
                report = undefined;
                oscar = zulu.bind(report)(entity);
                zulu = oscar.getMemberSupplementalByGuildId;
                entity = this;
                entity = entity.guildId;
                entity = zulu.bind(oscar)(entity);
                entity = entity[tango];
                zulu = null;
                if(!(zulu == entity)) { _fun59265_ip = 59; continue _fun59265 }
 57:
                entity = {};
 59:
                offset = entity.sourceInviteCode;
                verify = entity.joinSourceType;
                options = entity.inviterId;
                oscar = entity.integrationType;
                entity = {};
                yankee = zulu != offset;
                golf = null;
                if(!yankee) { _fun59265_ip = 97; continue _fun59265 }
 94:
                golf = offset;
 97:
                entity['sourceInviteCode'] = golf;
                offset = zulu != verify;
                golf = null;
                if(!offset) { _fun59265_ip = 114; continue _fun59265 }
 111:
                golf = verify;
 114:
                entity['joinSourceType'] = golf;
                verify = zulu != options;
                golf = null;
                if(!verify) { _fun59265_ip = 131; continue _fun59265 }
 128:
                golf = options;
 131:
                entity['inviterId'] = golf;
                golf = zulu != oscar;
                zulu = null;
                if(!golf) { _fun59265_ip = 148; continue _fun59265 }
 145:
                zulu = oscar;
 148:
                entity['integrationType'] = zulu;
                oscar = _closure1_slot11;
                zulu = argBar;
                zulu = oscar.bind(report)(zulu);
                entity['hasUnusualDmActivity'] = zulu;
                zulu = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 8;
                mike = oscar[mike];
                zulu = zulu.bind(report)(mike);
                mike = zulu.isSpammer;
                mike = mike.bind(zulu)(tango);
                entity['hasUnusualAccountActivity'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'createMember';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            tango = argFoo;
            entity = this;
            zulu = entity._membersMap;
            mike = zulu.set;
            entity = tango.userId;
            entity = mike.bind(zulu)(entity, tango);
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'updateMember';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun59267: for(var _fun59267_ip = 0; ; ) switch(_fun59267_ip) {
 0:
                tango = argFoo;
                mike = argBar;
                entity = this;
                oscar = null;
                if(!(oscar != mike)) { _fun59267_ip = 317; continue _fun59267 }
 18:
                golf = {};
                control = golf;
                source = tango;
                zulu = copyDataProperties(control, source);
                kilo = {};
                control = kilo;
                source = mike;
                mike = copyDataProperties(control, source);
                report = entity._computeMemberSupplementals;
                zulu = golf.userId;
                mike = kilo.unusualDMActivityUntil;
                if(!(oscar == mike)) { _fun59267_ip = 69; continue _fun59267 }
 63:
                mike = golf.unusualDMActivityUntil;
 69:
                mike = report.bind(entity)(zulu, mike);
                verify = mike.sourceInviteCode;
                options = mike.hasUnusualDmActivity;
                oscar = mike.hasUnusualAccountActivity;
                report = mike.joinSourceType;
                zulu = mike.inviterId;
                mike = mike.integrationType;
                offset = golf.sourceInviteCode;
                if(!(offset !== verify)) { _fun59267_ip = 127; continue _fun59267 }
 121:
                kilo['sourceInviteCode'] = verify;
 127:
                verify = golf.hasUnusualDmActivity;
                if(!(verify !== options)) { _fun59267_ip = 143; continue _fun59267 }
 137:
                kilo['hasUnusualDmActivity'] = options;
 143:
                options = golf.hasUnusualAccountActivity;
                if(!(options !== oscar)) { _fun59267_ip = 159; continue _fun59267 }
 153:
                kilo['hasUnusualAccountActivity'] = oscar;
 159:
                oscar = golf.joinSourceType;
                if(!(oscar !== report)) { _fun59267_ip = 175; continue _fun59267 }
 169:
                kilo['joinSourceType'] = report;
 175:
                report = golf.inviterId;
                if(!(report !== zulu)) { _fun59267_ip = 191; continue _fun59267 }
 185:
                kilo['inviterId'] = zulu;
 191:
                zulu = golf.integrationType;
                if(!(zulu !== mike)) { _fun59267_ip = 207; continue _fun59267 }
 201:
                kilo['integrationType'] = mike;
 207:
                foxtrot = kilo;
                mike = false;
                oscar = 9;
                report = undefined;
                zulu = false;
                for(offset in foxtrot)
 230:
                {
                    zulu = mike;
 242:
                    output = offset;
                    sizing = kilo[output];
                    echo = golf[output];
                    update = _closure1_slot1;
                    result = _closure1_slot2;
                    result = result[oscar];
                    result = update.bind(report)(result);
                    result = result.bind(report)(sizing, echo);
                    if(result) { _fun59267_ip = 230; continue _fun59267 }
 279:
                    golf[output] = sizing;
                    mike = true;
                    _fun59267_ip = 230; continue _fun59267;
                }
 287:
                oscar = entity._membersMap;
                report = oscar.set;
                mike = golf.userId;
                mike = report.bind(oscar)(mike, golf);
                if(mike) { _fun59267_ip = 315; continue _fun59267 }
 312:
                mike = zulu;
 315:
                return mike;
 317:
                zulu = entity._membersMap;
                mike = zulu.set;
                entity = tango.userId;
                entity = mike.bind(zulu)(entity, tango);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'removeMember';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity._membersMap;
            mike = zulu.delete;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'getMemberByUserId';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity._membersMap;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'values';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            tango = entity._membersMap;
            zulu = tango.values;
            mike = argFoo;
            entity = true;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'count';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity._membersMap;
            mike = zulu.size;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'version';
        entity['key'] = oscar;
        report = function() { // Original name: get
            entity = this;
            entity = entity._membersMap;
            entity = entity.version;
            return entity;
        };
        entity['get'] = report;
        mike[10] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    oscar = 10;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_mod_dash_member_safety/GuildMemberSafetyMembers.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['MemberSafetySecondaryIndex'] = report;
    zulu['hasUnusualDmActivity'] = tango;
    zulu['GuildMemberSafetyMembers'] = mike;
    return entity;
})();