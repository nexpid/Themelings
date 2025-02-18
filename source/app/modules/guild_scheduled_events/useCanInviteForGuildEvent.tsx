// app/modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    entity = argCor;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = option;
    tangon = function(argFoo) { // Original name: canEveryoneRoleViewEvent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = arguments[1];
            oscard = undefined;
            if(!(tangon === oscard)) { _fun00002_ip = 30; continue _fun00001 }
 12:
            michal = _closure1_slot4;
            entity = new Array(1);
            entity[0] = michal;
            tangon = entity;
 30:
            michal = tangon;
            entity = michal[Symbol.iterator];
            michal = entity().next;
            report = michal().value;
            michal = entity;
            michal = michal === oscard;
            tangon = undefined;
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 52:
            tangon = report;
 55:
            if(michal) { _fun00002_ip = 61; continue _fun00001 }
 58:
            entity.return();
 61:
            entity = 'entity_type';
            michal = entity in zuuluu;
            entity = zuuluu;
            if(!michal) { _fun00002_ip = 100; continue _fun00001 }
 75:
            michal = {};
            report = zuuluu.entity_type;
            michal['entityType'] = report;
            zuuluu = zuuluu.channel_id;
            michal['channelId'] = zuuluu;
            entity = michal;
 100:
            report = entity.entityType;
            zuuluu = entity.channelId;
            entity = _closure1_slot9;
            entity = entity.EXTERNAL;
            if(!(report !== entity)) { _fun00002_ip = 191; continue _fun00001 }
 128:
            entity = tangon.getChannel;
            report = entity.bind(tangon)(zuuluu);
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00002_ip = 189; continue _fun00001 }
 147:
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 8;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.canEveryoneRole;
            michal = _closure1_slot10;
            michal = michal.VIEW_CHANNEL;
            entity = zuuluu.bind(tangon)(michal, report);
 189:
            return entity;
 191:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot11 = tangon;
    michal = function(argFoo) { // Original name: isGuildEventInvitable
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            michal = arguments[1];
            report = undefined;
            if(!(michal === report)) { _fun00004_ip = 54; continue _fun00003 }
 12:
            tangon = _closure1_slot5;
            entity = new Array(4);
            entity[0] = tangon;
            tangon = _closure1_slot4;
            entity[1] = tangon;
            tangon = _closure1_slot6;
            entity[2] = tangon;
            zuuluu = _closure1_slot3;
            entity[3] = zuuluu;
            michal = entity;
 54:
            zuuluu = michal;
            entity = zuuluu[Symbol.iterator];
            zuuluu = entity().next;
            tangon = zuuluu().value;
            michal = entity;
            michal = michal === report;
            romeon = undefined;
            if(michal) { _fun00004_ip = 79; continue _fun00003 }
 76:
            romeon = tangon;
 79:
            golfie = undefined;
            if(michal) { _fun00004_ip = 109; continue _fun00003 }
 84:
            option = zuuluu().value;
            tangon = entity;
            tangon = tangon === report;
            golfie = undefined;
            michal = tangon;
            if(tangon) { _fun00004_ip = 109; continue _fun00003 }
 103:
            golfie = option;
            michal = tangon;
 109:
            offset = undefined;
            if(michal) { _fun00004_ip = 139; continue _fun00003 }
 114:
            option = zuuluu().value;
            tangon = entity;
            tangon = tangon === report;
            offset = undefined;
            michal = tangon;
            if(tangon) { _fun00004_ip = 139; continue _fun00003 }
 133:
            offset = option;
            michal = tangon;
 139:
            option = undefined;
            if(michal) { _fun00004_ip = 169; continue _fun00003 }
 144:
            tangon = zuuluu().value;
            zuuluu = entity;
            zuuluu = zuuluu === report;
            option = undefined;
            michal = zuuluu;
            if(zuuluu) { _fun00004_ip = 169; continue _fun00003 }
 163:
            option = tangon;
            michal = zuuluu;
 169:
            if(michal) { _fun00004_ip = 175; continue _fun00003 }
 172:
            entity.return();
 175:
            entity = _closure1_slot8;
            entity = entity.bind(report)(oscard);
            if(entity) { _fun00004_ip = 353; continue _fun00003 }
 193:
            verify = oscard.guild_id;
            michal = oscard.channel_id;
            tangon = oscard.entity_type;
            entity = _closure1_slot9;
            entity = entity.EXTERNAL;
            if(!(tangon !== entity)) { _fun00004_ip = 235; continue _fun00003 }
 223:
            entity = golfie.getChannel;
            tangon = entity.bind(golfie)(michal);
            _fun00004_ip = 251; continue _fun00003;
 235:
            yankee = romeon.getDefaultChannel;
            entity = oscard.guild_id;
            tangon = yankee.bind(romeon)(entity);
 251:
            entity = offset.getGuild;
            kiloes = entity.bind(offset)(verify);
            entity = option.getStageInstanceByChannel;
            foxtra = entity.bind(option)(michal);
            michal = _closure1_slot0;
            option = _closure1_slot2;
            entity = 9;
            entity = option[entity];
            option = michal.bind(report)(entity);
            michal = option.canViewInviteModal;
            sizing = _closure1_slot7;
            output = option;
            backup = tangon;
            entity = output[michal](sizing, kiloes, backup, foxtra, romeon);
            michal = !entity;
            entity = !michal;
            if(michal) { _fun00004_ip = 351; continue _fun00003 }
 321:
            michal = null;
            michal = michal != tangon;
            if(!michal) { _fun00004_ip = 348; continue _fun00003 }
 330:
            tangon = _closure1_slot11;
            zuuluu = new Array(1);
            zuuluu[0] = golfie;
            michal = tangon.bind(report)(oscard, zuuluu);
 348:
            entity = michal;
 351:
            return entity;
 353:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot12 = michal;
    entity = global;
    yankee = entity.Object;
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
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot7 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.isGuildEventEnded;
    var _closure1_slot8 = oscard;
    oscard = 6;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.GuildScheduledEventEntityTypes;
    var _closure1_slot9 = oscard;
    oscard = 7;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.Permissions;
    var _closure1_slot10 = oscard;
    oscard = 11;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx';
    oscard = golfie.bind(option)(oscard);
    report = function(argFoo) { // Original name: useCanInviteForGuildEvent
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 10;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        golfie = _closure1_slot5;
        zuuluu = new Array(4);
        zuuluu[0] = golfie;
        golfie = _closure1_slot4;
        zuuluu[1] = golfie;
        golfie = _closure1_slot6;
        zuuluu[2] = golfie;
        michal = _closure1_slot3;
        zuuluu[3] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            tangon = _closure1_slot12;
            zuuluu = _closure2_slot0;
            report = _closure1_slot5;
            michal = new Array(4);
            michal[0] = report;
            report = _closure1_slot4;
            michal[1] = report;
            report = _closure1_slot6;
            michal[2] = report;
            entity = _closure1_slot3;
            michal[3] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['default'] = report;
    zuuluu['canEveryoneRoleViewEvent'] = tangon;
    zuuluu['isGuildEventInvitable'] = michal;
    return entity;
})();