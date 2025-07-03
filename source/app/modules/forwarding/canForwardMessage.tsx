// app/modules/forwarding/canForwardMessage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: _canForwardMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            michal = option.state;
            entity = _closure1_slot7;
            entity = entity.SEND_FAILED;
            entity = michal !== entity;
            if(!entity) { _fun00002_ip = 182; continue _fun00001 }
 31:
            michal = _closure1_slot8;
            tangon = michal.FORWARDABLE;
            zuuluu = tangon.has;
            michal = option.type;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = !michal;
            michal = !zuuluu;
            if(zuuluu) { _fun00002_ip = 179; continue _fun00001 }
 65:
            zuuluu = option.poll;
            verify = null;
            zuuluu = verify == zuuluu;
            if(!zuuluu) { _fun00002_ip = 176; continue _fun00001 }
 80:
            tangon = option.activity;
            tangon = verify == tangon;
            if(!tangon) { _fun00002_ip = 173; continue _fun00001 }
 93:
            report = option.call;
            report = verify == report;
            if(!report) { _fun00002_ip = 170; continue _fun00001 }
 105:
            oscard = option.activityInstance;
            oscard = verify == oscard;
            if(!oscard) { _fun00002_ip = 167; continue _fun00001 }
 118:
            yankee = _closure1_slot0;
            offset = _closure1_slot1;
            verify = 5;
            offset = offset[verify];
            verify = undefined;
            offset = yankee.bind(verify)(offset);
            verify = offset.removeFlag;
            option = option.flags;
            golfie = _closure1_slot9;
            option = verify.bind(offset)(option, golfie);
            golfie = 0;
            oscard = golfie === option;
 167:
            report = oscard;
 170:
            tangon = report;
 173:
            zuuluu = tangon;
 176:
            michal = zuuluu;
 179:
            entity = michal;
 182:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    golfie = report.bind(entity)(tangon);
    tangon = golfie.GuildFeatures;
    var _closure1_slot6 = tangon;
    tangon = golfie.MessageFlags;
    option = golfie.MessageStates;
    var _closure1_slot7 = option;
    golfie = golfie.MessageTypesSets;
    var _closure1_slot8 = golfie;
    option = tangon.CROSSPOSTED;
    golfie = tangon.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD;
    option = option | golfie;
    golfie = tangon.GUILD_FEED_HIDDEN;
    option = option | golfie;
    golfie = tangon.HAS_SNAPSHOT;
    option = option | golfie;
    golfie = tangon.HAS_THREAD;
    option = option | golfie;
    golfie = tangon.IS_CROSSPOST;
    option = option | golfie;
    golfie = tangon.IS_VOICE_MESSAGE;
    option = option | golfie;
    golfie = tangon.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING;
    option = option | golfie;
    golfie = tangon.SUPPRESS_EMBEDS;
    option = option | golfie;
    golfie = tangon.SUPPRESS_NOTIFICATIONS;
    option = option | golfie;
    golfie = tangon.URGENT;
    golfie = option | golfie;
    tangon = tangon.IS_COMPONENTS_V2;
    tangon = golfie | tangon;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forwarding/canForwardMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: canForwardMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = _closure1_slot10;
            report = undefined;
            entity = entity.bind(report)(michal);
            if(entity) { _fun00004_ip = 24; continue _fun00003 }
 20:
            entity = false;
            return entity;
 24:
            oscard = _closure1_slot4;
            tangon = oscard.getChannel;
            entity = michal.channel_id;
            tangon = tangon.bind(oscard)(entity);
            entity = null;
            oscard = entity == tangon;
            report = undefined;
            if(oscard) { _fun00004_ip = 59; continue _fun00003 }
 54:
            report = tangon.guild_id;
 59:
            entity = entity == report;
            if(entity) { _fun00004_ip = 90; continue _fun00003 }
 66:
            tangon = _closure1_slot3;
            zuuluu = tangon.isChannelOrThreadParentGated;
            michal = michal.channel_id;
            michal = zuuluu.bind(tangon)(report, michal);
            entity = !michal;
 90:
            return entity;
        }
    };
    zuuluu['canForwardMessage'] = tangon;
    michal = function(argFoo) { // Original name: useCanForwardMessage
        report = argFoo;
        var _closure2_slot0 = report;
        oscard = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 6;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        golfie = oscard.bind(zuuluu)(tangon);
        oscard = golfie.useStateFromStores;
        zuuluu = _closure1_slot5;
        tangon = new Array(3);
        tangon[0] = zuuluu;
        zuuluu = _closure1_slot3;
        tangon[1] = zuuluu;
        zuuluu = _closure1_slot4;
        tangon[2] = zuuluu;
        zuuluu = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = _closure2_slot0;
                tangon = null;
                if(!(tangon != entity)) { _fun00006_ip = 212; continue _fun00005 }
 16:
                zuuluu = _closure1_slot4;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = entity.channel_id;
                entity = michal.bind(zuuluu)(entity);
                michal = tangon == entity;
                verify = undefined;
                if(michal) { _fun00006_ip = 56; continue _fun00005 }
 51:
                verify = entity.guild_id;
 56:
                if(!(tangon != verify)) { _fun00006_ip = 112; continue _fun00005 }
 60:
                michal = _closure1_slot5;
                entity = michal.getGuild;
                michal = entity.bind(michal)(verify);
                golfie = tangon == michal;
                entity = undefined;
                if(golfie) { _fun00006_ip = 109; continue _fun00005 }
 83:
                option = michal.features;
                golfie = option.has;
                michal = _closure1_slot6;
                michal = michal.FORWARDING_DISABLED;
                entity = golfie.bind(option)(michal);
 109:
                if(entity) { _fun00006_ip = 208; continue _fun00005 }
 112:
                entity = tangon != verify;
                if(!entity) { _fun00006_ip = 144; continue _fun00005 }
 119:
                option = _closure1_slot3;
                golfie = option.isChannelOrThreadParentGated;
                michal = _closure2_slot0;
                michal = michal.channel_id;
                entity = golfie.bind(option)(verify, michal);
 144:
                michal = _closure2_slot0;
                michal = tangon != michal;
                if(!michal) { _fun00006_ip = 200; continue _fun00005 }
 155:
                golfie = _closure1_slot4;
                oscard = golfie.getChannel;
                report = _closure2_slot0;
                report = report.channel_id;
                report = oscard.bind(golfie)(report);
                tangon = tangon == report;
                zuuluu = undefined;
                if(tangon) { _fun00006_ip = 197; continue _fun00005 }
 187:
                tangon = report.isModeratorReportChannel;
                zuuluu = tangon.bind(report)();
 197:
                michal = zuuluu;
 200:
                if(entity) { _fun00006_ip = 206; continue _fun00005 }
 203:
                entity = michal;
 206:
                return entity;
 208:
                entity = true;
                return entity;
 212:
                entity = true;
                return entity;
            }
        };
        oscard = oscard.bind(golfie)(tangon, zuuluu);
        var _closure2_slot1 = oscard;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = _closure2_slot1;
                entity = !entity;
                if(!entity) { _fun00008_ip = 23; continue _fun00007 }
 13:
                tangon = _closure2_slot0;
                zuuluu = null;
                entity = zuuluu != tangon;
 23:
                if(!entity) { _fun00008_ip = 44; continue _fun00007 }
 26:
                tangon = _closure1_slot10;
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = tangon.bind(michal)(zuuluu);
 44:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useCanForwardMessage'] = michal;
    return entity;
})();