// app/modules/fastest_list/getFastestListVisibleItemsDefault.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    michal = argPlu;
    entity = 0;
    tangon = michal[entity];
    michal = argBar;
    entity = undefined;
    report = michal.bind(entity)(tangon);
    tangon = report.fileFinishedImporting;
    michal = 'modules/fastest_list/getFastestListVisibleItemsDefault.tsx';
    michal = tangon.bind(report)(michal);
    michal = function(argFoo) { // Original name: getFastestListVisibleItemsDefault
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            backup = entity.estimatedListSize;
            entity = entity.sectionsVersioned;
            foxtra = entity.itemSizeIsUniform;
            romeon = entity.itemSizes;
            yankee = entity.listHeaderSize;
            michal = entity.sectionsId;
            offset = entity.sections;
            verify = entity.sectionFooterSizeIsUniform;
            option = entity.sectionFooterSizes;
            golfie = entity.sectionHeaderSizeIsUniform;
            oscard = entity.sectionHeaderSizes;
            entity = {'sectionsId': null, 'sectionStart': 0, 'sectionEnd': 0, 'itemStart': 0, 'itemEnd': 4294967295};
            entity['sectionsId'] = michal;
            report = 0;
            if(!(!(yankee >= backup))) { _fun00002_ip = 302; continue _fun00001 }
 98:
            michal = offset.length;
            michal = report < michal;
            zuuluu = 0;
            tangon = undefined;
            if(!michal) { _fun00002_ip = 300; continue _fun00001 }
 117:
            michal = offset[zuuluu];
            kiloes = yankee;
            if(!(report !== michal)) { _fun00002_ip = 282; continue _fun00001 }
 131:
            entity['sectionEnd'] = zuuluu;
            entity['itemEnd'] = report;
            if(golfie) { _fun00002_ip = 152; continue _fun00001 }
 146:
            michal = oscard[zuuluu];
            _fun00002_ip = 156; continue _fun00001;
 152:
            michal = oscard[report];
 156:
            sizing = yankee + michal;
            if(!(!(sizing >= backup))) { _fun00002_ip = 280; continue _fun00001 }
 164:
            michal = offset[zuuluu];
            michal = report < michal;
            echoed = sizing;
            result = 0;
            output = echoed;
            sizing = 0;
            if(!michal) { _fun00002_ip = 252; continue _fun00001 }
 185:
            entity['itemEnd'] = result;
            if(foxtra) { _fun00002_ip = 210; continue _fun00001 }
 194:
            michal = romeon[zuuluu];
            michal = michal.sizes;
            michal = michal[result];
            _fun00002_ip = 224; continue _fun00001;
 210:
            update = romeon[report];
            update = update.sizes;
            michal = update[report];
 224:
            source = echoed + michal;
            if(!(!(source >= backup))) { _fun00002_ip = 278; continue _fun00001 }
 232:
            result = result + 1;
            michal = offset[zuuluu];
            echoed = source;
            output = echoed;
            sizing = result;
            if(sizing < michal) { _fun00002_ip = 185; continue _fun00001 }
 252:
            if(verify) { _fun00002_ip = 261; continue _fun00001 }
 255:
            michal = option[zuuluu];
            _fun00002_ip = 265; continue _fun00001;
 261:
            michal = option[report];
 265:
            kiloes = output + michal;
            tangon = sizing;
            if(!(kiloes >= backup)) { _fun00002_ip = 282; continue _fun00001 }
 276:
            return entity;
 278:
            return entity;
 280:
            return entity;
 282:
            zuuluu = zuuluu + 1;
            michal = offset.length;
            yankee = kiloes;
            if(zuuluu < michal) { _fun00002_ip = 117; continue _fun00001 }
 300:
            return entity;
 302:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();