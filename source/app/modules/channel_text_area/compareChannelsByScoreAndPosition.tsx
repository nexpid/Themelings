// app/modules/channel_text_area/compareChannelsByScoreAndPosition.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = function(argFoo) { // Original name: getGuildChannelPosition
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.parent_id;
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00002_ip = 120; continue _fun00001 }
 15:
            report = _closure1_slot0;
            tangon = report.getChannel;
            entity = michal.parent_id;
            tangon = tangon.bind(report)(entity);
            report = zuuluu == tangon;
            entity = undefined;
            if(report) { _fun00002_ip = 52; continue _fun00001 }
 47:
            entity = tangon.position;
 52:
            tangon = zuuluu != entity;
            zuuluu = 0;
            if(!tangon) { _fun00002_ip = 64; continue _fun00001 }
 61:
            zuuluu = entity;
 64:
            entity = 1;
            report = zuuluu + entity;
            entity = michal.isGuildVocal;
            entity = entity.bind(michal)();
            tangon = michal.position;
            zuuluu = 1000;
            zuuluu = zuuluu * report;
            tangon = zuuluu + tangon;
            if(entity) { _fun00002_ip = 108; continue _fun00001 }
 103:
            entity = tangon;
            _fun00002_ip = 118; continue _fun00001;
 108:
            zuuluu = 500;
            entity = tangon + zuuluu;
 118:
            return entity;
 120:
            zuuluu = michal.type;
            entity = _closure1_slot1;
            entity = entity.GUILD_CATEGORY;
            if(!(zuuluu !== entity)) { _fun00002_ip = 149; continue _fun00001 }
 142:
            entity = michal.position;
            _fun00002_ip = 171; continue _fun00001;
 149:
            zuuluu = michal.position;
            michal = 1;
            zuuluu = zuuluu + michal;
            michal = 1000;
            entity = michal * zuuluu;
 171:
            return entity;
        }
    };
    var _closure1_slot2 = entity;
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
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelTypes;
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel_text_area/compareChannelsByScoreAndPosition.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: compareChannelsByScoreAndPosition
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = argBar;
            tangon = entity.score;
            zuuluu = michal.score;
            if(!(tangon === zuuluu)) { _fun00004_ip = 204; continue _fun00003 }
 25:
            report = _closure1_slot2;
            zuuluu = entity.record;
            verify = undefined;
            tangon = report.bind(verify)(zuuluu);
            zuuluu = michal.record;
            zuuluu = report.bind(verify)(zuuluu);
            if(!(tangon === zuuluu)) { _fun00004_ip = 198; continue _fun00003 }
 63:
            report = entity.sortable;
            option = null;
            if(!(option == report)) { _fun00004_ip = 103; continue _fun00003 }
 75:
            offset = entity.comparator;
            golfie = option == offset;
            oscard = undefined;
            if(golfie) { _fun00004_ip = 100; continue _fun00003 }
 90:
            golfie = offset.toLocaleLowerCase;
            oscard = golfie.bind(offset)();
 100:
            report = oscard;
 103:
            offset = option != report;
            golfie = '';
            oscard = golfie;
            if(!offset) { _fun00004_ip = 120; continue _fun00003 }
 117:
            oscard = report;
 120:
            report = entity.sortable;
            if(!(option == report)) { _fun00004_ip = 158; continue _fun00003 }
 130:
            yankee = michal.comparator;
            offset = option == yankee;
            verify = undefined;
            if(offset) { _fun00004_ip = 155; continue _fun00003 }
 145:
            offset = yankee.toLocaleLowerCase;
            verify = offset.bind(yankee)();
 155:
            report = verify;
 158:
            option = option != report;
            if(!option) { _fun00004_ip = 168; continue _fun00003 }
 165:
            golfie = report;
 168:
            option = oscard < golfie;
            report = -1;
            if(option) { _fun00004_ip = 196; continue _fun00003 }
 181:
            golfie = oscard > golfie;
            oscard = 0;
            if(!golfie) { _fun00004_ip = 193; continue _fun00003 }
 190:
            oscard = 1;
 193:
            report = oscard;
 196:
            return report;
 198:
            zuuluu = tangon - zuuluu;
            return zuuluu;
 204:
            michal = michal.score;
            entity = entity.score;
            entity = michal - entity;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();