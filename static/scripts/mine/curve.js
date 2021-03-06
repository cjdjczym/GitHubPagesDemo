const div_height = 900, preview_width = 900, editor_width = 900, padding = 30, padding2 = 20;
const div_width = preview_width + editor_width + padding2;
const select_div_height = 40;

const svg_width = 800;
const svg_height = 800;
const left_padding = 35;
const right_padding = 15;
const bottom_padding = 45;
const top_padding = 10;
const curve_g_height = svg_height - bottom_padding - top_padding;
const curve_g_width = svg_width - left_padding - right_padding;
const k_x = 100;
const canvas_width = 800;
const canvas_height = 800;

//mapping of labels and colors
const color_scheme1 = [
    "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728",
    "#9467bd", "#8c564b", "#e377c2", "#7f7f7f",
    "#bcbd22", "#17becf"
];

const color_scheme2 = {
    0: '#cfe1f2', 1: '#a5cce4', 2: '#6daed5', 3: '#3c8bc3',
    4: '#1864aa', 5: '#d3eecd', 6: '#c4e8be', 7: '#b5e1ae',
    8: '#a4da9e', 9: '#91d18e', 10: '#7dc87f', 11: '#68be72',
    12: '#54b366', 13: '#41a75b', 14: '#319a50', 15: '#238c46',
    16: '#157f3b', 17: '#fdd8b3', 18: '#fb8d3d', 19: '#c44103',
    20: '#e2e1ef', 21: '#c9c9e2', 22: '#acabd2', 23: '#908cc1',
    24: '#7769b0', 25: '#61409b', 26: '#fee5d9', 27: '#fcbba1',
    28: '#fc9272', 29: '#fb6a4a', 30: '#ef3b2c', 31: '#cb181d',
    32: '#99000d', 33: '#cccccc'
};

const algorithms2type = {
    'Original': 0,
    'HaGrid': 1,
    'DGrid': 2,
    'Ours(adjusted r)': 3,
    'Ours(adjustable)': 4
}

const data_name2type = {
    '2008_cancelled_flights': 0,
    'Abalone': 1,
    'Avila': 2,
    'Barcelona_accident': 3,
    'Basketball': 4,
    'BeijingPM2.5': 5,
    'BlackFriday': 6,
    'Chicago_crimes': 7,
    'Clothes': 8,
    'Condition_based_maintenance': 9,
    'Copter': 10,
    'COVID-19_deaths': 11,
    'Credit_card_fraud': 12,
    'Crowd_sourced_mapping': 13,
    'CS_rankings': 14,
    'Cup98LRN': 15,
    'Daily_sports': 16,
    'DBLP_samples': 17,
    'Dc_census_citizens': 18,
    'Diamonds': 19,
    'Epileptic_seizure': 20,
    'Forest_covertype': 21,
    'GaAsH6': 22,
    'Gas_sensor_array_drift': 23,
    'Gesture_phase': 24,
    'GNFUV': 25,
    'Google_playstore_sentiment': 26,
    'Grammatical_facial_expression': 27,
    'GridGena': 28,
    'Hathi_trust_library': 29,
    'HT_sensor': 30,
    'Human_activity_recognition': 31,
    'Manhattan': 32,
    'Mnist_tsne': 33,
    'MoCap': 34,
    'Music': 35,
    'News': 36,
    'News_aggregator': 37,
    'News_popularity': 38,
    'Nomao': 39,
    'Paleontology': 40,
    'Person_activity': 41,
    'Phyllotaxis': 42,
    'Satimage': 43,
    'Sensorless_drive_diagnosis': 44,
    'Swiss_roll_2d': 45,
    'Swiss_roll_3d': 46,
    'Telescope': 47,
    'Terrorism': 48,
    'Wine': 49
};

const data_name2values = {
    '2008_cancelled_flights': [3, 3, 386],
    'Abalone': [3, 5, 7],
    'Avila': [3, 5, 13],
    'Barcelona_accident': [3, 4, 33],
    'Basketball': [3, 5, 33],
    'BeijingPM2.5': [3, 1, 43],
    'BlackFriday': [3, 2, 117],
    'Chicago_crimes': [3, 2, 156],
    'Clothes': [3, 5, 22],
    'Condition_based_maintenance': [3, 5, 8],
    'Copter': [3, 5, 52],
    'COVID-19_deaths': [3, 1, 42],
    'Credit_card_fraud': [3, 1, 78],
    'Crowd_sourced_mapping': [3, 5, 13],
    'CS_rankings': [3, 5, 49],
    'Cup98LRN': [3, 2, 134],
    'Daily_sports': [3, 5, 6681],
    'DBLP_samples': [3, 2, 184],
    'Dc_census_citizens': [3, 2, 196],
    'Diamonds': [3, 1, 30],
    'Epileptic_seizure': [3, 5, 7],
    'Forest_covertype': [3, 1, 93],
    'GaAsH6': [3, 5, 454],
    'Gas_sensor_array_drift': [3, 5, 91],
    'Gesture_phase': [3, 4, 38],
    'GNFUV': [3, 2, 22],
    'Google_playstore_sentiment': [3, 4, 92],
    'Grammatical_facial_expression': [3, 4, 37],
    'GridGena': [3, 5, 18],
    'Hathi_trust_library': [3, 2, 1015],
    'HT_sensor': [3, 2, 791],
    'Human_activity_recognition': [3, 1, 525],
    'Manhattan': [3, 5, 8],
    'Mnist_tsne': [3, 5, 29],
    'MoCap': [3, 3, 133],
    'Music': [3, 5, 17],
    'News': [3, 5, 16],
    'News_aggregator': [3, 2, 500],
    'News_popularity': [3, 1, 60],
    'Nomao': [3, 2, 47],
    'Paleontology': [3, 5, 50],
    'Person_activity': [3, 5, 215],
    'Phyllotaxis': [3, 2, 1],
    'Satimage': [3, 5, 7],
    'Sensorless_drive_diagnosis': [3, 5, 77],
    'Swiss_roll_2d': [3, 5, 9],
    'Swiss_roll_3d': [3, 5, 10],
    'Telescope': [3, 3, 15],
    'Terrorism': [3, 2, 812],
    'Wine': [5, 1, 18]
};

const fileTypes = [
    'application/json'
];

let data_name = 'CS_rankings';
let algorithm = 'Original';
let [k, size, max_grid_length] = data_name2values[data_name];
console.log('data_name:', data_name);
console.log('k:', k);
console.log('size:', size);
console.log('max_grid_length:', max_grid_length);

let k_density = k / max_grid_length;
const format = d => d3.format(".3f")(d);
const percentage_format = d3.format(".1%");
const line = d3.line();
let values;
let json_array = [];
let uploaded_data;
let file_path;
let has_upload = 0;
let special_data_symbol = 0;  //CS_rankings   DBLP_samples
let original_data_r = 1;      //radius
let original_data_t = 1;      //transparency
let original_data_s = 1;      //sampling rate
let k_change = 0;
let size_change = 0;

if (data_name == "CS_rankings" || data_name == "DBLP_samples") special_data_symbol = 1;

const board = d3.select('body')
    .append('div')
    .attr('id', 'board')
    .style('width', div_width + 'px')
    .style('height', '100%')
    .style('border', '10px solid #6bc26c')
    .style('border-radius', '2%')
    .style('margin', '15px')
    .style('padding', '20px')
    .style('background-color', '#F8F8FF')

const select_div = board
    .append('div')
    .style('margin-bottom', '8px')
    .style('display', 'flex')
    .style('width', div_width + 'px')
    .style('height', select_div_height + 'px');

//DataSets choose
const data_choose_input_div = select_div.append('div')
    .attr('id', 'data_choose_input_div')
    .attr('class', 'dropdown show');

data_choose_input_div.append('text')
    .text('Dataset: ')
    .style('font-size', '20px')

data_choose_input_div.append('button')
    .attr('class', 'btn btn-secondary dropdown-toggle')
    .attr('type', 'button')
    .attr('id', 'data_dropdownMenuButton')
    .attr('data-toggle', 'dropdown')
    .attr('aria-haspopup', 'true')
    .attr('aria-expanded', 'false')
    .html(data_name);

data_choose_input_div.append('div')
    .attr('class', 'dropdown-menu')
    .attr('aria-labelledby', 'data_dropdownMenuButton')
    .selectAll('a')
    .data(Object.keys(data_name2type)).enter()
    .append('a')
    .attr('class', 'dropdown-item')
    .attr('href', '#')
    .html((d, i) => Object.keys(data_name2type)[i]);

//Bind update event
$('a.dropdown-item').on('click', function () {
    const cur_data_name = $(this).text();
    $('#data_dropdownMenuButton').html(cur_data_name);
    if (cur_data_name !== data_name) {
        data_name = cur_data_name;
        if (data_name == "CS_rankings" || data_name == "DBLP_samples") special_data_symbol = 1;
        else special_data_symbol = 0;
        has_upload = 0;
        k_change = 0;
        size_change = 0;

        $("#name_preview").html('No files is uploaded');

        //initialize sliders
        initialize_slider_value();

        update_plot();
    }
});

//Algorithms choose
const algor_choose_input_div = select_div.append('div')
    .attr('id', 'algor_choose_input_div')
    .attr('class', 'dropdown show')
    .style('margin-left', '20px');

algor_choose_input_div.append('text')
    .text('Algorithm: ')
    .style('font-size', '20px');

algor_choose_input_div.append('button')
    .attr('class', 'btn btn-secondary dropdown-toggle')
    .attr('type', 'button')
    .attr('id', 'algor_dropdownMenuButton')
    .attr('data-toggle', 'dropdown')
    .attr('aria-haspopup', 'true')
    .attr('aria-expanded', 'false')
    .html(algorithm);

algor_choose_input_div.append('div')
    .attr('class', 'dropdown-menu')
    .attr('aria-labelledby', 'algor_dropdownMenuButton')
    .selectAll('b')
    .data(Object.keys(algorithms2type)).enter()
    .append('b')
    .attr('class', 'dropdown-item')
    .attr('href', '#')
    .html((d, i) => Object.keys(algorithms2type)[i]);

//Bind update event
$('b.dropdown-item').on('click', function () {
    const cur_algor = $(this).text();
    $('#algor_dropdownMenuButton').html(cur_algor);
    if (cur_algor !== algorithm) {
        algorithm = cur_algor;
        console.log(algorithm);
        has_upload = 0;
        k_change = 0;
        size_change = 0;

        $("#name_preview").html('No files is uploaded');

        initialize_slider_value();

        update_plot();
    }
});

//upload file
const file_upload = select_div.append('div')
    .attr('id', 'file_upload_div')
    .attr('class', 'dropdown show')
    .style('margin-left', '65px')
    .style('display', 'flex')

const file_upload_div = file_upload.append('form')
    .append('div')

file_upload_div.append('label')
    .attr('for', 'file-upload')
    .style('cursor', 'pointer')
    .style('background-color', '#d1fff3')
    .style('border', '4px solid #7fe7cd')
    .style('border-radius', '4%')
    .style('padding', '4px 10px')
    .html('upload json file')
    .style('font-weight', 'bold')

file_upload_div.append('input')
    .attr('type', 'file')
    .attr('accept', '.json')
    .attr('id', 'file-upload')
    .attr('name', 'file-upload')
    .attr('value', 'upload file')
    .style('display', 'none')

$("form label").hover(
    function () {
        $("form label").css({
            "background-color": "#99ffe7",
            "color": "black"
        })
    },
    function () {
        $("form label").css({
            "background-color": "#d1fff3",
            "color": "black"
        })
    }
)

const preview_div = file_upload.append('div')
    .attr('class', 'preview')
    .attr('id', 'name_preview')
    .style('display', 'flex')
    .style('align-items', 'center')
    .style('margin-left', '25px')
    .style('line-height', '100%')
    .html('No files is uploaded')
    .style('font-weight', '600')
    .style('font-size', '15px');


$("#file-upload").on("change", function () {
    console.log(this.files[0].name);
    if (validFileType(this.files[0])) {
        $("#name_preview").html(this.files[0].name);

        const reader = new FileReader()
        // read file
        reader.readAsText(this.files[0], "UTF-8")
        reader.onload = function (e) {
            has_upload = 1;
            //read contents
            const fileString = e.target.result;
            uploaded_data = JSON.parse(fileString);
            //console.log(uploaded_data)
        }
        console.log(`uploaded file path is ${this.value}`);

        initialize_slider_value();

        update_plot();
    } else {
        $("#name_preview").html('File ' + this.files[0].name + ' is not a json file. Please update your selection');
    }
});

function validFileType(file) {
    return fileTypes.includes(file.type);
}

const plot_div = board.append('div')
    .style('display', 'flex')
    .style('width', div_width + 'px')
    .style('height', div_height + 'px');


const l_win = plot_div.append('div')
    .style('width', (canvas_width + 5) + 'px')
    .style('height', (canvas_height + 5) + 'px')
    .style('border', '2px solid #888')
    .style('position', 'relative');


const canvas = l_win.append('canvas')
    .attr('id', 'my_canvas')
    .attr('width', canvas_width)
    .attr('height', canvas_height)
    .style('background-color', 'white')
    .style('position', 'absolute');

const font_awesome_svg = l_win.append('svg')
    .attr('id', 'font_awesome_svg')
    .attr('width', 30)
    .attr('height', 100)
    .attr('transform', `translate(${canvas_width - 30}, 10)`)
    .style('position', 'absolute');

const statistics_svg = l_win.append('svg')
    .attr('id', 'statistics_svg')
    .attr('width', 300)
    .attr('height', 50)
    .attr('transform', `translate(5, 5)`)
    .style('position', 'absolute');

const svg = plot_div.append('div')
    .style('width', (svg_width + 5) + 'px')
    .style('height', (svg_height + 5) + 'px')
    .style('border', '2px solid #888')
    .style('margin-left', 100 + 'px')
    .append('svg')
    .attr('width', svg_width)
    .attr('height', svg_height)
    .style('background-color', 'white');

update_plot();

//data_number and label_number
const data_number = l_win.append('text')
    .attr('font-size', '13px')
    .attr('font-family', 'helvetica')
    .attr('alignment-baseline', 'middle')
    .attr('text-anchor', 'end')
    .attr('font-weight', 'bold')
    .text("????????????")

//canvas background color
let light_on = true;

const toolbox_g = font_awesome_svg.append('g')
    .attr('id', 'toolbox_g')
    .attr('transform', `translate(10, 10)`);

const img_text = toolbox_g.append('text')
    .attr('id', 'img_text')
    .attr('class', 'far')
    .attr('y', 2)
    .attr('text-anchor', 'middle')
    .attr('font-size', '25px')
    .attr('font-family', 'helvetica')
    .attr('alignment-baseline', 'central')
    .attr('fill', light_on ? 'black' : 'white')
    .attr('cursor', 'pointer')
    .style('pointer-events', 'all')
    .on('click', function () {
        let c = document.getElementById('my_canvas');
        //let dataURL = c.toDataURL("image/png");
        let fileName = data_name + ".png";
        c.toBlob(function (blob) {
            saveAs(blob, fileName);
        });
    })
    .text('\uf1c5')
    .append('title')
    .text('download png file');

const json_text = toolbox_g.append('text')
    .attr('id', 'json_text')
    .attr('class', 'far')
    .attr('y', 36)
    .attr('text-anchor', 'middle')
    .attr('font-size', '25px')
    .attr('font-family', 'helvetica')
    .attr('alignment-baseline', 'central')
    .attr('fill', light_on ? 'black' : 'white')
    .attr('cursor', 'pointer')
    .style('pointer-events', 'all')
    .on('click', function () {
        let content = JSON.stringify(json_array, null, '\t');
        let blob = new Blob([content], {type: "text/plain;charset=utf-8"});
        let fileName = has_upload == 1 ? "Ours.json" : algorithm + ".json"
        saveAs(blob, fileName);
    })
    .text('\uf15b')
    .append('title')
    .text('download json file');

const light_text = toolbox_g.append('text')
    .attr('id', 'light_text')
    .attr('class', 'far')
    .attr('y', 70)
    .attr('text-anchor', 'middle')
    .attr('font-size', '25px')
    .attr('font-family', 'helvetica')
    .attr('alignment-baseline', 'central')
    .attr('fill', light_on ? 'black' : 'white')
    .attr('cursor', 'pointer')
    .style('pointer-events', 'all')
    .on('click', function () {
        if (light_on) {
            light_on = false;
            light_text.text('\uf0eb');
            canvas.style('background-color', 'black');
            light_text.select('title').text('control the light');
            toolbox_g.selectAll('text').attr('fill', 'white');
            statistics_svg.selectAll('text').attr('fill', 'white');
            console.log(light_text.select('title'))
        } else {
            light_on = true;
            light_text.text('\uf0eb');
            canvas.style('background-color', 'white')
            light_text.select('title').text('control the light');
            toolbox_g.selectAll('text').attr('fill', 'black');
            statistics_svg.selectAll('text').attr('fill', 'black');
        }
    })
    .text('\uf0eb')
    .append('title')
    .text('control the light');


const control_div = board.append('div')
    .style('display', 'flex')
    .style('width', div_width + 'px')
    .style('height', '370px');

const original_div = control_div.append('div')
    .style('display', 'flex')
    .style('flex-direction', 'column')
    .style('padding', '20px')
    .style('width', '805px')
    .style('border', '3px dashed #888')
    .style('border-radius', '1.5%');

const original_title_div = original_div.append('div')
    .style('display', 'flex')

original_title_div.append('span')
    .html("Appearance control")
    .style('font-weight', '700')
    .style('font-size', '45px');

original_title_div.append('span')
    .style('display', 'flex')
    .style('align-items', 'flex-end')
    .style('margin-left', '20px')
    .html("[Original]")
    .style('font-weight', '500')
    .style('font-size', '20px');

const ours_div = control_div.append('div')
    .style('background', "#ececec")
    .style('display', 'flex')
    .style('flex-direction', 'column')
    .style('padding', '20px')
    .style('width', '805px')
    .style('margin-left', '100px')
    .style('border', '3px dashed #888')
    .style('border-radius', '1.5%');

const ours_title_div = ours_div.append('div')
    .style('display', 'flex')

ours_title_div.append('span')
    .html("Parameter control")
    .style('font-weight', '700')
    .style('font-size', '45px');

ours_title_div.append('span')
    .style('display', 'flex')
    .style('align-items', 'flex-end')
    .style('margin-left', '20px')
    .html("[Ours(adjustable)]")
    .style('font-weight', '500')
    .style('font-size', '20px');


const radius_control_div = original_div.append('div')
    .style('height', '80px')
    .style('margin-top', '50px')
    .style('margin-bottom', '10px');

const radius_control_input = radius_control_div.append('input')
    .attr('id', 'radius_ex6')
    .attr('class', 'original_slider_input')
    .attr('type', 'text')
    .attr('data-slider-id', 'radius')
    .attr('data-slider-min', '0.5')
    .attr('data-slider-max', '3')
    .attr('data-slider-step', '0.1')
    .attr('data-slider-value', '1')

const radius_control_span = radius_control_div.append('span')
    .attr('id', 'radius_ex6CurrentSliderValLabel')
    .style('width', '100px')
    .html('radius: ')
    .style('font-size', '35px')
    .style('margin-left', '45px')
    .append('span')
    .attr('id', 'radius_ex6SliderVal')
    .attr('class', 'slider_show')
    .html('1');

$("#radius_ex6").slider();
$("#radius_ex6")
    .on("slide", function (slideEvt) {
        $("#radius_ex6SliderVal").text(slideEvt.value);
    })
    .on("slideStop", function (slideEvt) {
        original_data_r = slideEvt.value;
        update_plot()
    });

$("#radius .slider-selection").css({
    "background": "#e8c0da"
});

$("#radius .slider-handle").css({
    "background": "#ff71cd"
});

const transparency_control_div = original_div.append('div')
    .style('height', '80px')
    .style('margin-bottom', '10px');

const transparency_control_input = transparency_control_div.append('input')
    .attr('id', 'transparency_ex6')
    .attr('class', 'original_slider_input')
    .attr('type', 'text')
    .attr('data-slider-id', 'transparency')
    .attr('data-slider-min', '0.05')
    .attr('data-slider-max', '1')
    .attr('data-slider-step', '0.05')
    .attr('data-slider-value', '1')

const transparency_control_span = transparency_control_div.append('span')
    .attr('id', 'transparency_ex6CurrentSliderValLabel')
    .html('transparency: ')
    .style('font-size', '35px')
    .style('margin-left', '45px')
    .append('span')
    .attr('id', 'transparency_ex6SliderVal')
    .attr('class', 'slider_show')
    .html('1');

$("#transparency_ex6").slider();
$("#transparency_ex6")
    .on("slide", function (slideEvt) {
        $("#transparency_ex6SliderVal").text(slideEvt.value);
    })
    .on("slideStop", function (slideEvt) {
        original_data_t = slideEvt.value;
        update_plot()
    });

$("#transparency .slider-selection").css({
    "background": "#b7e3c9"
});

$("#transparency .slider-handle").css({
    "background": "#46cb81"
});

const sampling_control_div = original_div.append('div')
    .style('height', '80px')
    .style('margin-bottom', '10px');

const sampling_control_input = sampling_control_div.append('input')
    .attr('id', 'sampling_ex6')
    .attr('class', 'original_slider_input')
    .attr('type', 'text')
    .attr('data-slider-id', 'sampling')
    .attr('data-slider-min', '0.1')
    .attr('data-slider-max', '1')
    .attr('data-slider-step', '0.1')
    .attr('data-slider-value', '1')

const sampling_control_span = sampling_control_div.append('span')
    .attr('id', 'sampling_SliderValLabel')
    .html('sampling rate: ')
    .style('font-size', '35px')
    .style('margin-left', '45px')
    .append('span')
    .attr('id', 'sampling_ex6SliderVal')
    .attr('class', 'slider_show')
    .html('1');

$("#sampling_ex6").slider();
$("#sampling_ex6")
    .on("slide", function (slideEvt) {
        $("#sampling_ex6SliderVal").text(slideEvt.value);
    })
    .on("slideStop", function (slideEvt) {
        original_data_s = slideEvt.value;
        update_plot();
    });

$("#sampling .slider-selection").css({
    "background": "#c2e4ee"
});

$("#sampling .slider-handle").css({
    "background": "#43c7e1"
});

const k_control_div = ours_div.append('div')
    .style('height', '100px')
    .style('margin-top', '50px')
    .style('margin-bottom', '20px');

const k_control_input = k_control_div.append('input')
    .attr('id', 'k_ex6')
    .attr('class', 'ours_slider_input')
    .attr('type', 'text')
    .attr('data-slider-id', 'k')
    .attr('data-slider-min', '3')
    .attr('data-slider-max', '10')
    .attr('data-slider-step', '1')
    .attr('data-slider-value', '3')

const k_control_span = k_control_div.append('span')
    .attr('id', 'k_ex6CurrentSliderValLabel')
    .style('width', '100px')
    .html('k: ')
    .style('font-size', '35px')
    .style('margin-left', '45px')
    .append('span')
    .attr('id', 'k_ex6SliderVal')
    .attr('class', 'ours_slider_show')
    .html('3');

$("#k_ex6").slider();
$("#k_ex6")
    .on("slide", function (slideEvt) {
        $("#k_ex6SliderVal").text(slideEvt.value);
    })
    .on("slideStop", function (slideEvt) {
        k_change = 1;
        k = slideEvt.value;
        update_plot()
    });

$("#k .slider-selection").css({
    "background": "#cbcbcb"
});

$("#k .slider-handle").css({
    "background": "#8f8f8f"
});

const size_control_div = ours_div.append('div')
    .style('height', '100px')
    .style('margin-bottom', '20px');

const size_control_input = size_control_div.append('input')
    .attr('id', 'size_ex6')
    .attr('class', 'ours_slider_input')
    .attr('type', 'text')
    .attr('data-slider-id', 'size')
    .attr('data-slider-min', '1')
    .attr('data-slider-max', '10')
    .attr('data-slider-step', '1')
    .attr('data-slider-value', '5')

const size_control_span = size_control_div.append('span')
    .attr('id', 'size_ex6CurrentSliderValLabel')
    .html('size: ')
    .style('font-size', '35px')
    .style('margin-left', '45px')
    .append('span')
    .attr('id', 'size_ex6SliderVal')
    .attr('class', 'ours_slider_show')
    .html('5');

$("#size_ex6").slider();
$("#size_ex6")
    .on("slide", function (slideEvt) {
        $("#size_ex6SliderVal").text(slideEvt.value);
    })
    .on("slideStop", function (slideEvt) {
        size_change = 1;
        size = slideEvt.value;
        update_plot()
    });

$("#size .slider-selection").css({
    "background": "#cbcbcb"
});

$("#size .slider-handle").css({
    "background": "#8f8f8f"
});

$(".slider.slider-horizontal").css({
    "margin-left": "80px"
});


d3.selectAll('.slider_input')
    .selectAll('slider-selection')
    .style('background', '#BABABA')

function update_plot() {
    json_array.length = 0;
    canvas.selectAll('*').remove();
    svg.selectAll('*').remove();
    statistics_svg.selectAll('*').remove();

    let menu = algorithm;
    if (menu == "Ours(adjusted r)" || menu == "Ours(adjustable)") menu = "Ours";

    file_path = "static/data/" + menu + "/" + data_name + ".json";

    console.log(file_path);

    d3.json(file_path).then(function (data_points) {
        if (has_upload == 1) data_handle_upload();
        else if (algorithm == "Original") data_handle_original(data_points);
        else if (algorithm == "HaGrid") data_handle_HaGrid(data_points);
        else if (algorithm == "Ours(adjusted r)") data_handle_adjusted(data_points);
        else if (algorithm == "Ours(adjustable)") data_handle_ours(data_points);
    })
}

function original_slider_control_disable() {
    original_div.style('background', "#ececec");
    $(".original_slider_input").slider("disable");

    $("#radius .slider-selection").css({
        "background": "#cbcbcb"
    });

    $("#radius .slider-handle").css({
        "background": "#8f8f8f"
    });
    $("#transparency .slider-selection").css({
        "background": "#cbcbcb"
    });

    $("#transparency .slider-handle").css({
        "background": "#8f8f8f"
    });

    $("#sampling .slider-selection").css({
        "background": "#cbcbcb"
    });

    $("#sampling .slider-handle").css({
        "background": "#8f8f8f"
    });
}

function original_slider_control_enable() {
    original_div.style('background', "#ffffff");
    $(".original_slider_input").slider("enable");

    $("#radius .slider-selection").css({
        "background": "#e8c0da"
    });

    $("#radius .slider-handle").css({
        "background": "#ff71cd"
    });
    $("#transparency .slider-selection").css({
        "background": "#b7e3c9"
    });

    $("#transparency .slider-handle").css({
        "background": "#46cb81"
    });

    $("#sampling .slider-selection").css({
        "background": "#c2e4ee"
    });

    $("#sampling .slider-handle").css({
        "background": "#43c7e1"
    });
}

function ours_slider_control_disable() {
    ours_div.style('background', "#ececec");
    $(".ours_slider_input").slider("disable");

    $("#k .slider-selection").css({
        "background": "#cbcbcb"
    });

    $("#k .slider-handle").css({
        "background": "#8f8f8f"
    });
    $("#size .slider-selection").css({
        "background": "#cbcbcb"
    });

    $("#size .slider-handle").css({
        "background": "#8f8f8f"
    });
}

function ours_slider_control_enable() {
    ours_div.style('background', "#ffffff");
    $(".ours_slider_input").slider("enable");

    $("#k .slider-selection").css({
        "background": "#f1e3a9"
    });

    $("#k .slider-handle").css({
        "background": "#eaba48"
    });
    $("#size .slider-selection").css({
        "background": "#bacae7"
    });

    $("#size .slider-handle").css({
        "background": "#4675cb"
    });
}

function initialize_slider_value() {
    original_data_t = 1;
    original_data_s = 1;
    original_data_r = 1;
    $(".original_slider_input").slider('setValue', '1');
    $("#k_ex6").slider('setValue', k + '');
    $("#size_ex6").slider('setValue', size + '');
    $(".slider_show").text('1');
    $("#k_ex6SliderVal").text('3');
    $("#size_ex6SliderVal").text('5');
}